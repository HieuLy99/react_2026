/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "./ui/button";

export default function ProceedCheckoutComponent({
  handleProceedCheckout,
}: any) {
  return (
    <>
      <div className="proced-block border border-indigo-600 p-4 mb-4 bg-white rounded-lg shadow-lg ">
        <div className="border p-4 mb-4 rounded-md">Proceed to checkout</div>
        <div className="proced-block-content border p-4 rounded-md">
          <div>Order summary</div>
          <div>Sub total : ....</div>
          <div>Shipping : ....</div>
          <div>tax : ....</div>
          <div>Total : ....</div>
        </div>
        <div>
          <Button
            variant="default"
            className="w-full mt-4"
            onClick={() => handleProceedCheckout()}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
      <div className="note-block">Proceed to checkout 123</div>
    </>
  );
}
