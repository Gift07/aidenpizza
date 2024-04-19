"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdStar } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Navigation } from "swiper/modules";
import { IoChevronForwardSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlices";

const PizzaListings = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const getPizza = async () => {
      setLoading(true);
      const res = await fetch("/api/specialmenus");
      const response = await res.json();
      setMenus(response.data); // Store the fetched data in state (menus)
      setLoading(false);
    };
    getPizza();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-36">
      <div className="w-[80%] flex items-center justify-between relative">
        <div>
          <div className="flex text-2xl font-semibold items-center text-primary">
            Popular dishes <hr className="w-24 h-1 bg-primary" />
          </div>
          <div className="text-3xl font-semibold py-2">Browse Our Menu</div>
        </div>
        <div
          onClick={() => {
            router.push("/menu");
          }}
          className="flex items-center gap-x-2 text-secondary  duration-200 text-xl cursor-pointer"
        >
          See all
          <IoChevronForwardSharp />
        </div>
        <div className="absolute right-0 -top-24">
          <Image
            src="/tamato.png"
            alt="header"
            height={100}
            width={100}
            style={{ objectFit: "contain" }}
            className="transform transition-transform hover:-rotate-90"
          />
        </div>
      </div>
      <div className="w-[80%] flex items-center gap-x-4 py-12">
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
          {loading ? (
            <div>Loading...</div>
          ) : (
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
              {menus.map((menu, index) => (
                <SwiperSlide
                  key={index}
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
                      Officia sunt est veniam quis consequat laborum culpa
                      aliquip mollit excepteur mollit cillum.
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
          )}
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
    </div>
  );
};

export default PizzaListings;
