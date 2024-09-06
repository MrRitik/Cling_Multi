import React, { useEffect, useState } from "react";
import Products from "./Products";
import { PRODUCTS } from "../products";

const Home = () => {
  return (
    <div>
      <div className="text-6xl font-bold text-center pt-7 uppercase">
        Our Products
      </div>
      <div className="grid grid-cols-3">
        {PRODUCTS.map((product) => (
          <Products data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
