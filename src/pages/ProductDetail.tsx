/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetProductDetail } from "../hook/useProducts";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useGetProductDetail(
    Number(searchParams.get("id")),
  );
  console.log(
    "data in ProductDetail",
    data,
    useGetProductDetail(Number(searchParams.get("id"))),
  );
  const navigate = useNavigate();

  const notify = () => toast("Wow so easy!");

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-8 p-8">
          <div className="flex-1">
            <img src={data?.image} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
              <p>Price: ${data?.price}</p>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  notify();
                  navigate("/cart/shopping-cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
