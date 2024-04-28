"use client";

import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlices";
import { isEmpty } from "lodash";

const MenuItems = ({ menus }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center gap-x-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
        {menus.map((menu, i) => (
          <div
            key={i}
            className="border border-primary/40 rounded-xl w-full  flex items-center h-44"
          >
            <div className="w-full px-2">
              <div className="w-full flex items-center justify-between py-1">
                <h1 className="text-md lg:text-lg font-semibold">
                  {menu.name}
                </h1>
              </div>
              <div className="flex items-center gap-x-1 text-xs lg:text-xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="text-secondary">
                    <MdStar />
                  </div>
                ))}
              </div>
              <div className="py-2 text-sm">{menu.description}</div>
              <div className="w-full">
                <h1 className="text-lg font-semibold text-primary">
                  ${menu.price}
                </h1>
              </div>
              {/* <div>
                <button
                  onClick={() => {
                    dispatch(addItemToCart(menu));
                  }}
                  className="bg-secondary w-56 h-14 rounded-full flex items-center justify-center text-white text-xl"
                >
                  <FaCartShopping /> order now
                </button>
              </div> */}
            </div>
            {!isEmpty(menu.imageUrl) && (
              <div className="w-44 h-full flex items-center justify-center rounded-r-xl">
                <Image
                  src={`/${menu.imageUrl}`}
                  alt="header"
                  height={200}
                  width={200}
                  style={{ objectFit: "cover" }}
                  className="h-full rounded-r-xl"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
