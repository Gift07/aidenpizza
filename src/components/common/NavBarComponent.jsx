"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BsCart2, BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { IoIosMenu } from "react-icons/io";

const NavBarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartTotalItems } = useSelector((state) => state.cart);
  const pathname = usePathname();

  const handleRedirect = () => {
    window.open(
      "https://www.google.com/maps/place/7812+Old+Georgetown+Rd,+Bethesda,+MD+20814,+USA/@38.9877106,-77.0994846,17z/data=!4m6!3m5!1s0x89b7c963010fd5c9:0x38597c141fc2f387!8m2!3d38.9876161!4d-77.0993712!16s%2Fg%2F11b8v52ydg?entry=ttu"
    );
  };

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
    <div className="w-screen">
      <div className="w-full flex items-center justify-center ">
        <nav
          className={`w-full flex items-center py-4 backdrop-blur bg-white/60 justify-center px-4 lg:px-20 transition z-[999] ${
            scrolled && `border-b border-black/10  fixed top-0 duration-200 `
          }`}
        >
          <div className="  w-full flex items-center justify-between">
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
            <div className="flex">
              <ul className="hidden lg:flex lg:items-end lg:gap-x-5">
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
                <li className="flex gap-x-2 bg-black/5 rounded-lg px-2 py-1 cursor-pointer">
                  <Link
                    href={"/cart"}
                    className={`hover:text-textprimary duration-200   flex items-center  py-1${
                      pathname === "/cart" ? "text-primary" : "text-black"
                    }`}
                  >
                    <BsCart3 />
                  </Link>
                  |
                  <div className="bg-primary  h-6 w-6 flex items-center justify-center rounded-full text-white text-sm -top-5 right-0">
                    {cartTotalItems}
                  </div>
                </li>
                <li
                  onClick={handleRedirect}
                  className="flex items-center gap-x-1 text-black rounded-lg px-2 py-1 cursor-pointer"
                >
                  7812 Old Georgetown Rd, Bethesda, MD 20814
                </li>
              </ul>
              <div className="lg:hidden flex items-center gap-x-4">
                <Link
                  href={"/cart"}
                  className={`hover:text-textprimary duration-200 cursor-pointer   flex items-center  py-1${
                    pathname === "/cart" ? "text-primary" : "text-black"
                  }`}
                >
                  <div className="flex gap-x-2 bg-black/5 rounded-lg px-2 py-1">
                    <BsCart3 />|
                    <div className="bg-primary  h-6 w-6 flex items-center justify-center rounded-full text-white text-sm -top-5 right-0">
                      {cartTotalItems}
                    </div>
                  </div>
                </Link>
                <div className="flex gap-x-2 bg-black/5 rounded-lg px-2 py-1">
                  <Link
                    href={"/menu"}
                    className={`hover:text-textprimary duration-200 cursor-pointer ${
                      pathname === "/menu" ? "text-primary" : "text-black"
                    }`}
                  >
                    Menu
                  </Link>
                </div>
                <div className="text-3xl">
                  <IoIosMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarComponent;
