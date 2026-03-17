/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import cancel from "../assets/cancel.svg";
import noSymbol from "../assets/no-symbol.svg";
import lock from "../assets/lock.svg";
import { useCarts } from "@/hook/useCart";
import { useSearchParams, useNavigate } from "react-router-dom";
import ShoppingCartComponent from "@/components/ShoppingCartComponent";
import StepsProcessComponent from "@/components/StepsProcessComponent";
import ProceedCheckoutComponent from "@/components/ProceedCheckoutComponent";
import ShippingDetailsComponent from "@/components/ShippingDetailsComponent";

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
      id: 234324,
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
  const navigate = useNavigate();

  const { data, isLoading, error } = useCarts();
  console.log("data in cart", data, isLoading, error);

  const [cartItems, setCartItems] = useState(mockCart);
  const [open, setOpen] = useState(false);

  const handleCancelOrder = () => {
    setCartItems([]);
    setOpen(false);
  };

  const handleRemoveCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const [searchParams] = useSearchParams();
  const cartPart = searchParams.get("part");
  console.log("searchParams", searchParams.get("part"));
  console.log("===> cartItems", cartItems);

  const stepsList = [
    { name: "Shopping cart", active: true, linkTo: "shopping-cart" },
    { name: "Shipping details", active: false, linkTo: "shipping-details" },
    { name: "Payment option", active: false, linkTo: "payment-option" },
  ];
  const handleReturnNamePart = (linkTo: string | null) => {
    const stepItem = stepsList.find((item) => item.linkTo === linkTo);
    return stepItem ? stepItem.name : "";
  };

  const handleProceedCheckout = () => {
    navigate("?part=payment-option");
  };

  const isShoppingCart = cartPart === "shopping-cart";
  const isShippingDetails = cartPart === "shipping-details";
  const isPaymentOption = cartPart === "payment-option";

  return (
    <div className="p-8 bg-gray-50">
      <div className="items-center flex justify-center pb-10 pt-6">
        <StepsProcessComponent cartPart={cartPart} stepsList={stepsList} />
      </div>
      <div className="flex gap-x-8">
        <div className="flex-3  ">
          <div className="shopping-cart-block bg-white p-8 rounded-lg mb-8">
            <div>{handleReturnNamePart(cartPart)}</div>
            <hr className="mt-2 mb-1" />
            {isShoppingCart && (
              <>
                <ShoppingCartComponent
                  cartItems={cartItems}
                  noSymbol={noSymbol}
                  handleRemoveCart={handleRemoveCart}
                  lock={lock}
                  navigate={navigate}
                  setOpen={setOpen}
                  cancel={cancel}
                  handleCancelOrder={handleCancelOrder}
                  open={open}
                />

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
              </>
            )}
            {isShippingDetails && <ShippingDetailsComponent />}
          </div>
          {isPaymentOption && <div>Payment option</div>}
        </div>
        <div className="flex-1">
          <ProceedCheckoutComponent  handleProceedCheckout={handleProceedCheckout}/>
        </div>
      </div>
    </div>
  );
}
