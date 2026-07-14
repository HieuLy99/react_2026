export default function DisplayStarComponent({ rate }: { rate: number }) {
  const fullStars = Math.round(rate);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex gap-1">
      {Array(fullStars)
        .fill("★")
        .map((_, i) => (
          <span key={`f-${i}`} className="text-[#E66C4E] text-lg">
            ★
          </span>
        ))}
      {Array(emptyStars)
        .fill("☆")
        .map((_, i) => (
          <span key={`e-${i}`} className="text-gray-300 text-lg">
            ☆
          </span>
        ))}
    </div>
  );
}
