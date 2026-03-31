/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CardBlockComponent from "./CardBlockComponent";
import { Button } from "./ui/button";
import { AlertDialogSmallCommon } from "./AlertDialogComponent";

export default function ShoppingCartComponent({
  cartItems,
  noSymbol,
  handleRemoveCart,
  lock,
  navigate,
  setOpen,
  cancel,
  handleCancelOrder,
  open,
}: any) {
  return (
    <div>
      <div className="flex pb-2 pt-4 pl-4 pr-4 text-gray-500 ">
        <div className="flex-3">Product </div>
        <div className="flex-1">Quantity</div>
        <div className="flex-2">Price</div>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <div className="text-center py-8 items-center flex flex-rol gap-4 justify-center p-4 mb-4 bg-white rounded-lg shadow-lg ">
            <img
              src={noSymbol}
              alt=""
              className="cursor-pointer w-5 h-5 pr-1 "
            />
            Your cart is empty
          </div>
        ) : (
          cartItems.map((item: any) => (
            <CardBlockComponent
              item={item}
              handleRemoveCart={handleRemoveCart}
            />
          ))
        )}
      </div>
      <div className="total-price-block flex text-sm ">
        <div className="flex-1 items-center align-middle flex flex-nowrap gap-2">
          <img src={lock} alt="" className="cursor-pointer w-5 h-5 pr-1 " />
          <span>100% no-risk money back</span>
        </div>
        <div className="flex-1 text-center">
          <Button
            variant="outline"
            onClick={() => navigate("?part=shipping-details")}
          >
            Proced to secure Checkout
          </Button>
        </div>
        <div className="flex justify-end items-center align-middle cursor-pointer">
          {cartItems.length > 0 && (
            <AlertDialogSmallCommon
              buttonShow={
                <div className="flex justify-end items-center align-middle cursor-pointer">
                  <img
                    src={cancel}
                    alt=""
                    className="cursor-pointer w-5 h-5 pr-1 "
                  />
                  <span className="underline text-red-500 text-sm">
                    Cancel order
                  </span>
                </div>
              }
              alertDialogTitle="Are you sure you want to cancel this order?"
              open={open}
              onOpenChange={setOpen}
              onConfirm={() => handleCancelOrder()}
            ></AlertDialogSmallCommon>
          )}
        </div>
      </div>
    </div>
  );
}
