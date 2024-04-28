"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

function CartHeroComponent() {
  const router = useRouter();
  const { cartTotalItems } = useSelector((state) => state.cart);

  return (
    <div className="w-full bg-bgyellow relative h-[70px] lg:h-[250px]">
      <div className="absolute left-0 top-10 hidden lg:flex">
        <Image src={"/black-jamun.png"} alt="header" height={100} width={100} />
      </div>
      <div className="absolute left-[500px] top-10 hidden lg:flex">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full flex items-center justify-center px-4 lg:px-0">
        <div className="w-full lg:w-[80%] flex lg:flex-col flex-row items-center justify-between lg:items-start lg:justify-center pt-3">
          <div className="w-full flex items-center justify-between py-3">
            <div
              onClick={() => {
                router.back();
              }}
              className="bg-primary/30 border border-primary h-10 w-10 flex items-center justify-center text-primary text-xl rounded-full cursor-pointer"
            >
              <IoMdArrowBack />
            </div>
          </div>
          <div className="flex text-md lg:text-2xl font-semibold items-center text-primary px-4 lg:px-0 text-nowrap">
            {cartTotalItems} Cart Items{" "}
            <hr className="w-24 h-1 bg-primary hidden lg:flex" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHeroComponent;
