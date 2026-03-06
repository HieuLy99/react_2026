import  { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  console.log("searchParams", searchParams.get("id"));
  useEffect(() => {
    if (searchParams.get("id")) {
      // call api get product detail by id
    }
  }, [searchParams]);
  return <div>ProductDetail</div>;
}
