/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import cancel from "../assets/cancel.svg";
import deleteIcon from "../assets/delete.svg";
import noSymbol from "../assets/no-symbol.svg";
import lock from "../assets/lock.svg";
import { AlertDialogSmallCommon } from "@/components/AlertDialogComponent";
import { useCarts } from "@/hook/useCart";

export default function Cart() {
  const mockCart = [
    {
      id: 3243243243,
      productName: "Product 1",
      quantity: 2,
      price: 10,
      description: "This is product 1",
    },
    {
      id: 3243243243,
      productName: "Product 2",
      quantity: 1,
      price: 20,
      description: "This is product 1",
    },
  ];

  const mockCartSuggest = [
    {
      id: 3243243243,
      productName: "Product 1",
      quantity: 2,
      price: 10,
      description: "This is product 1",
    },
    {
      id: 3243243243,
      productName: "Product 2",
      quantity: 1,
      price: 20,
      description: "This is product 1",
    },
  ];

  const { data, isLoading, error } = useCarts();
  console.log("data in cart", data, isLoading, error );

  const [cartItems, setCartItems] = useState(mockCart);
  const [open, setOpen] = useState(false);

  const handleCancelOrder = () => {
    setCartItems([]);
    setOpen(false);
  };

  const handleRemoveCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const CardBlack = ({ item }: any) => {
    return (
      <div
        key={item.id}
        className="cart-item flex  p-4 mb-4 bg-white rounded-lg shadow-lg  font-light"
      >
        <div className="flex-3">
          <div className="font-medium">
            {item.productName}
            <span className="text-xs font-thin text-blue-500">
              {" "}
              [ {item.id} ]
            </span>
          </div>
          <div className="text-sm text-gray-500">{item.description}</div>
          <div>3333</div>
        </div>
        <div className="flex-1 flex justify-start">
          <div className="flex items-center border rounded">
            <button className="px-3 py-1">-</button>
            <input type="number" className="w-12 text-center outline-none" />
            <button className="px-3 py-1">+</button>
          </div>
        </div>
        <div className="flex-1 flex items-center aligns-center">
          ${item.price}
        </div>

        <div
          className="flex-1 flex justify-end aligns-center cursor-pointer items-center"
          onClick={() => handleRemoveCart(item.id)}
        >
          <img
            src={deleteIcon}
            alt=""
            className="cursor-pointer w-5 h-5 pr-1 "
          />
        </div>
      </div>
    );
  };
  return (
    <div className="p-8 bg-gray-50">
      <div className="items-center flex justify-center pb-8">
        1 shopping cart - 2 shopping details 3 - Payment option
      </div>
      <div className="flex gap-x-8">
        <div className="flex-3  ">
          <div className="shopping-cart-block bg-white p-8 rounded-lg mb-8">
            <div>Shopping Cart</div>
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
                cartItems.map((item) => <CardBlack item={item} />)
              )}
            </div>
            <div className="total-price-block flex text-sm ">
              <div className="flex-1 items-center align-middle flex flex-nowrap gap-2">
                <img
                  src={lock}
                  alt=""
                  className="cursor-pointer w-5 h-5 pr-1 "
                />
                <span>100% no-risk money back</span>
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
          <div className="pb-8">
            you may also be intrested in these exclusive offers
          </div>
          <div className="suggestion-block">
            {mockCartSuggest.map((item) => (
              <div
                key={item.id}
                className="cart-item flex border border-indigo-600 p-4 mb-4 bg-white rounded-lg shadow-lg "
              >
                <div className="flex-1">{item.productName}</div>
                <div className="flex-1">{item.quantity}</div>
                <div className="flex-1">${item.price}</div>
                <div className="flex-1 cursor-pointer">add to card</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="proced-block border border-indigo-600 p-4 mb-4 bg-white rounded-lg shadow-lg ">
            <div>Proceed to checkout</div>
            <div>Shipping address</div>
            <div>Payment method</div>
            <div>Review order</div>
          </div>
          <div className="note-block"></div>
        </div>
      </div>
    </div>
  );
}
