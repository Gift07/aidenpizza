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
    <div className="w-full bg-bgyellow relative h-[200px]">
      <div className="absolute left-0 top-10">
        <Image src={"/black-jamun.png"} alt="header" height={100} width={100} />
      </div>
      <div className="absolute right-0 bottom-0 ">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] flex flex-col justify-center pt-3">
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
          <div className="flex text-2xl font-semibold items-center text-primary">
            {cartTotalItems} Cart Items <hr className="w-24 h-1 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHeroComponent;
