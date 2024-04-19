"use client";

import React from "react";
import CartTable from "../common/CartTable";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";

const CartShopping = () => {
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
  console.log("cartItems", cartTotalPrice);
  return (
    <div className="w-full flex items-center justify-center py-3">
      <div className="w-[80%] flex items-start">
        <div className="w-full">
          <CartTable cartItems={cartItems} />
        </div>
        <div className="w-1/3">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default CartShopping;
