import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

interface ScrollPosition {
  scrollY: number;
  direction: ScrollDirection;
  isScrolled: boolean;
}

export function useScrollPosition(threshold = 0): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    direction: "up",
    isScrolled: false,
  });
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;

      setScrollPosition({
        scrollY: currentScrollY,
        direction: currentScrollY > lastScrollY.current ? "down" : "up",
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollPosition;
}
