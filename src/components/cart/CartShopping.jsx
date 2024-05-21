"use client";

import React, { Fragment } from "react";
import CartTable from "../common/CartTable";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartShopping = () => {
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center py-0 lg:py-3">
      <div className="w-full lg:w-[80%] flex  flex-col lg:flex-row items-start h-full ">
        {cartItems.length === 0 ? (
          <Fragment>
            <Image
              src={`/empty_cart.png`}
              alt="header"
              height={500}
              width={500}
              style={{ objectFit: "contain" }}
            />
            <button
              onClick={() => {
                router.push("/menu");
              }}
              className="w-full lg:w-auto text-lg text-white bg-secondary rounded-full lg:px-5 lg:py-3 py-2 flex items-center justify-center"
            >
              Back to Menus
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <div className="w-full lg:h-auto h-[calc(100vh-260px)]">
              <CartTable cartItems={cartItems} />
            </div>
            <div className="w-full lg:w-1/3">
              <CartCheckout cartPrice={cartTotalPrice} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default CartShopping;
