import cancel from "../assets/cancel.svg";
import deleteIcon from "../assets/delete.svg";

export default function Cart() {
  const mockCart = [
    { id: 1, productName: "Product 1", quantity: 2, price: 10 },
    { id: 2, productName: "Product 2", quantity: 1, price: 20 },
  ];

  const mockCartSuggest = [
    { id: 1, productName: "Product 1", quantity: 2, price: 10 },
    { id: 2, productName: "Product 2", quantity: 1, price: 20 },
  ];
  return (
    <div className="p-8 bg-gray-50">
      <div className="items-center flex justify-center pb-8">
        1 shopping cart - 2 shopping details 3 - Payment option
      </div>
      <div className="flex gap-x-8">
        <div className="flex-3  ">
          <div className="shopping-cart-block">
            <div>Shopping Cart</div>
            <div className="flex">
              <div className="flex-3">Product </div>
              <div className="flex-1">Quantity</div>
              <div className="flex-1">Price</div>
              <div className="flex-1"></div>
              <div className="flex-1"></div>
            </div>
            <div>
              {mockCart.map((item) => (
                <div
                  key={item.id}
                  className="cart-item flex border border-indigo-600 p-4 mb-4 bg-white"
                >
                  <div className="flex-3">{item.productName}</div>
                  <div className="flex-1">{item.quantity}</div>
                  <div className="flex-1">${item.price}</div>
                  <div className="flex-1 flex justify-center">
                    input
                  </div>
                  <div className="flex-1 flex justify-end">
                    <img
                      src={deleteIcon}
                      alt=""
                      className="cursor-pointer w-5 h-5 pr-1 "
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price-block flex ">
              <div className="flex-1 items-center align-middle">
                100% no-risk money back
              </div>
              <div className="flex justify-end items-center align-middle cursor-pointer">
                <img
                  src={cancel}
                  alt=""
                  className="cursor-pointer w-5 h-5 pr-1 "
                />
                Cancel order
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
                className="cart-item flex border border-indigo-600 p-4 mb-4 bg-white"
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
          <div className="proced-block border border-indigo-600 p-4 mb-4 bg-white">
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
