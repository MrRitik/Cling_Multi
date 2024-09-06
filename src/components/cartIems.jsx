import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const CartIems = ({ item }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-5/6 h-32 flex justify-between mt-5 px-8 py-4 border shadow-2xl "
          key={item.id}
        >
          <div className="ml-10 flex w-72 ">
            <img src={item.image} alt="" />
            <p className="pl-5 pt-8">{item.title}</p>
          </div>
          <div className="text-2xl mt-3 flex gap-2">
            <button
              className=" w-10 h-10 bg-slate-400"
              onClick={() => addToCart(item.id)}
            >
              +
            </button>
            <button className="w-10 h-10 text-xl">{cartItem[item.id]}</button>

            <button
              className="w-10 h-10 bg-slate-400"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </button>
          </div>
          <div className="flex gap-8 mt-6 text-xl ">
            <span>Rs {item.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartIems;
