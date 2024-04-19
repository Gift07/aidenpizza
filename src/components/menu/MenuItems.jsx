"use client";

import React, { useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlices";

const MenuItems = ({ menus }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center gap-x-4 ">
      <div>
        {/* Custom navigation buttons */}
        <button
          className="bg-secondary text-white p-3 rounded-full text-2xl"
          ref={prevRef}
        >
          <GoArrowLeft />
        </button>
      </div>
      <div className="w-full flex items-center">
        <Swiper
          // ref={swiperRef} // Assign ref to the Swiper component
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full flex items-center gap-x-4 pt-20"
        >
          {menus.map((menu, i) => (
            <SwiperSlide
              key={i}
              className="border border-primary/40 rounded-xl w-full py-6"
            >
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/pizza-2.png"}
                  alt="header"
                  height={200}
                  width={200}
                  style={{ objectFit: "contain" }}
                  className="transform transition-transform hover:-rotate-90"
                />
              </div>
              <div className="w-full px-4">
                <div className="w-full flex items-center justify-between py-2">
                  <h1 className="text-xl font-semibold">{menu.name}</h1>
                  <h1 className="text-xl font-semibold text-primary">
                    ${menu.price}
                  </h1>
                </div>
                <div className="flex items-center gap-x-1 text-xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="text-secondary">
                      <MdStar />
                    </div>
                  ))}
                </div>
                <div className="py-2">
                  Officia sunt est veniam quis consequat laborum culpa aliquip
                  mollit excepteur mollit cillum.
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(addItemToCart(menu));
                    }}
                    className="bg-secondary w-56 h-14 rounded-full flex items-center justify-center text-white text-xl"
                  >
                    <FaCartShopping /> order now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <button
          className="bg-secondary text-white p-3 rounded-full text-2xl"
          ref={nextRef}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
