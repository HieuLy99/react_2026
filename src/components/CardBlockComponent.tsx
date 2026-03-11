/* eslint-disable @typescript-eslint/no-explicit-any */
import deleteIcon from "../assets/delete.svg";

export default function CardBlockComponent({ item, handleRemoveCart }: any) {
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
        <img src={deleteIcon} alt="" className="cursor-pointer w-5 h-5 pr-1 " />
      </div>
    </div>
  );
}
