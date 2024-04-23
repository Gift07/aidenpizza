"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { BsCart2, BsCart3 } from "react-icons/bs";
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
        <nav
          className={`w-full flex items-center py-4 backdrop-blur bg-white/60 justify-center px-20 transition z-[999] ${
            scrolled && `border-b border-black/10  fixed top-0 duration-200 `
          }`}
        >
          <div className=" xl:w-[1280px]  w-full flex items-center justify-between">
            <div className="w-20 h-10  flex items-center justify-center ">
              <Image
                src={"/aden.avif"}
                alt="header"
                height={80}
                width={80}
                style={{ objectFit: "contain" }}
                className="w-16 h-10"
              />
            </div>
            <div>
              <ul className="flex items-end gap-x-5">
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
                    Menu
                  </Link>
                </li>
                <li className="flex gap-x-2 bg-black/5 rounded-lg px-2 py-1">
                  <Link
                    href={"/cart"}
                    className={`hover:text-textprimary duration-200 cursor-pointer   flex items-center  py-1${
                      pathname === "/cart" ? "text-primary" : "text-black"
                    }`}
                  >
                    <BsCart3 />
                  </Link>{" "}
                  |
                  <div className="bg-primary  h-6 w-6 flex items-center justify-center rounded-full text-white text-sm -top-5 right-0">
                    {cartTotalItems}
                  </div>
                </li>
                <li className="flex items-center gap-x-1 bg-black text-white rounded-lg px-2 py-1">
                  Call us
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
