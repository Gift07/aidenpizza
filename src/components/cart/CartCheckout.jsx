"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CartCheckout = ({ cartPrice }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-bgyellow h-auto lg:h-80 border border-secondary/20 px-4 py-2 lg:px-0 lg:py-0 lg:p-4">
      <h1 className="text-lg lg:text-2xl py-2">Cart SubTotal</h1>
      <hr />
      <div>
        <div className="w-full flex items-center justify-between py-1 lg:py-2 text-sm font-medium lg:font-light lg:text-lg">
          <h1>Cart cost</h1>
          <h1>${cartPrice}</h1>
        </div>
        <div className="w-full flex items-center justify-between py-1 lg:py-2 text-sm font-medium lg:font-light lg:text-lg">
          <h1>Shipping cost</h1>
          <h1>$0</h1>
        </div>
        <div className="w-full flex items-center justify-between py-1 lg:py-2 text-sm font-medium lg:font-light lg:text-lg">
          <h1>Total cost</h1>
          <h1>${cartPrice}</h1>
        </div>
        <div className="w-full flex items-center justify-center pt-1 lg:pt-6">
          <button
            onClick={() => {
              router.push("/checkout");
            }}
            className="w-full lg:w-auto text-lg text-white bg-secondary rounded-full lg:px-5 lg:py-3 py-2 flex items-center justify-center"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
