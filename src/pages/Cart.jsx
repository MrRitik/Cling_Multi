import React, { useContext, useState } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shopContext";
import CartIems from "../components/cartIems";

const Cart = () => {
  const { cartItem, totalAmount } = useContext(ShopContext);
  const tAmount = totalAmount();

  return (
    <div>
      <h1 className="flex justify-center text-6xl py-4 font-extrabold uppercase ">
        Your Cart
      </h1>
      <div className="">
        {PRODUCTS.map((item) => {
          if (cartItem[item.id] !== 0) {
            return <CartIems item={item} />;
          }
        })}
      </div>
      <div className="flex justify-around text-2xl h-28 mt-10 font-bold">
        <span>Total Amount</span>
        <span> Rs : {Math.floor(tAmount)}</span>
      </div>
    </div>
  );
};

export default Cart;
