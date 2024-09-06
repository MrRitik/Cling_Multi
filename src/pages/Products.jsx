import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Products = ({ data }) => {
  const { addToCart, cartItem } = useContext(ShopContext);

  const itemCount = cartItem[data.id];
  return (
    <div className="flex flex-col border mt-16 px-14 mb-4">
      <div key={data.id}>
        <img
          src={data.image}
          alt={data.name}
          className="w-96 h-64 object-contain items-center mr-4 pt-4"
        />
      </div>
      <div className="flex flex-col items-center pt-5">
        <h2 className="text-xl font-semibold">{data.category.name}</h2>
        <p className="text-black font-bold text-xl py-4 ">
          Price: Rs {data.price}
        </p>
        <p className="text-gray-800">{data.title}</p>
        <button
          className="  rounded-2xl font-bold  w-fit px-5 py-2 my-4 border-black border-2 hover:text-white hover:bg-black "
          onClick={() => addToCart(data.id)}
        >
          Add To Cart {itemCount > 0 && <>({itemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default Products;
