"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartTotalItems } = useSelector((state) => state.cart);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center ">
        <Image src={"/header-img.png"} alt="header" height={200} width={200} />
      </div>
      <div className="w-full flex items-center justify-center ">
        <nav
          className={`w-full flex items-center justify-center px-20 transition z-[999] ${
            scrolled && `shadow-lg h-20 fixed top-0 duration-200 bg-white`
          }`}
        >
          <div className=" xl:w-[1680px]  w-full flex items-center justify-between">
            <div className="w-24 h-14 border border-primary rounded-l-full rounded-r-full flex items-center justify-center bg-gray-100">
              <Image
                src={"/aden.avif"}
                alt="header"
                height={100}
                width={100}
                style={{ objectFit: "contain" }}
                className="w-16 h-12"
              />
            </div>
            <div>
              <ul className="flex items-center gap-x-5">
                <li>
                  <Link
                    href={"/"}
                    className={`hover:text-textprimary duration-200 cursor-pointer ${
                      pathname === "/" ? "text-primary" : "text-black"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href={"/cart"}
                    className={`hover:text-textprimary duration-200 cursor-pointer  bg-gray-200 rounded-3xl flex items-center px-3 gap-x-1 py-1${
                      pathname === "/cart" ? "text-primary" : "text-black"
                    }`}
                  >
                    <BsCart2 /> Cart
                  </Link>
                  <div className="bg-primary absolute h-6 w-6 flex items-center justify-center rounded-full text-white text-sm -top-5 right-0">
                    {cartTotalItems}
                  </div>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={`hover:text-textprimary duration-200 cursor-pointer ${
                      pathname === "/about" ? "text-primary" : "text-black"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/menu"}
                    className={`hover:text-textprimary duration-200 cursor-pointer ${
                      pathname === "/menu" ? "text-primary" : "text-black"
                    }`}
                  >
                    Menus
                  </Link>
                </li>
                <li className="flex items-center gap-x-1">
                  <FiPhone /> +12026566828
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarComponent;
