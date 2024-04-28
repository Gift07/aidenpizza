"use client";

import React from "react";
import CartTable from "../common/CartTable";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";

const CartShopping = () => {
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);

  return (
    <div className="w-full h-full flex items-center justify-center py-0 lg:py-3">
      <div className="w-full lg:w-[80%] flex  flex-col lg:flex-row items-start h-full ">
        <div className="w-full lg:h-auto h-[calc(100vh-260px)]">
          <CartTable cartItems={cartItems} />
        </div>
        <div className="w-full lg:w-1/3">
          <CartCheckout cartPrice={cartTotalPrice} />
        </div>
      </div>
    </div>
  );
};

export default CartShopping;
