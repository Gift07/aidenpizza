"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CartCheckout = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-bgyellow h-80 border border-secondary/20 p-4">
      <h1 className="text-2xl py-2">Cart SubTotal</h1>
      <hr />
      <div>
        <div className="w-full flex items-center justify-between py-2 text-lg">
          <h1>Shipping cost</h1>
          <h1>$120</h1>
        </div>
        <div className="w-full flex items-center justify-between py-2 text-lg">
          <h1>Shipping cost</h1>
          <h1>$120</h1>
        </div>
        <div className="w-full flex items-center justify-between py-2 text-lg">
          <h1>Shipping cost</h1>
          <h1>$120</h1>
        </div>
        <div className="w-full flex items-center justify-center pt-6">
          <button
            onClick={() => {
              router.push("/checkout");
            }}
            className="text-lg text-white bg-secondary rounded-full px-5 py-3 flex items-center justify-center"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
