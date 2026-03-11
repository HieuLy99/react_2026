import React from "react";

export default function ProceedCheckoutComponent() {
  return (
    <>
      <div className="proced-block border border-indigo-600 p-4 mb-4 bg-white rounded-lg shadow-lg ">
        <div className="border p-4 mb-4 rounded-md">Proceed to checkout</div>
        <div className="proced-block-content border p-4 rounded-md">
          <div>Shipping address</div>
          <div>Payment method</div>
          <div>Review order</div>
        </div>
      </div>
      <div className="note-block"></div>
    </>
  );
}
