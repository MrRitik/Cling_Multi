import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { ShopContext } from "../context/shopContext";

const Navbar = ({ item }) => {
  const { cartItem } = useContext(ShopContext);
  return (
    <div className="flex sticky w-full justify-between bg-black text-white h-20">
      <div className="px-9 py-7 text-xl font-bold">
        <Link to="/">e-Shopping</Link>
      </div>
      <div className="px-12 py-6 relative">
        <Link to="/cart">
          <BsCart4 size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
