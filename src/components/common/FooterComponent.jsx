import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FooterComponent = () => {
  return (
    <div className="w-full bg-bgyellow">
      <div className="w-full flex items-center justify-center py-16">
        <div className="w-[80%] flex items-center justify-between">
          <div className="w-full flex gap-x-32">
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
              <h1 className="text-2xl">INFORMATION</h1>
              <ul>
                <li className="py-2">Home</li>
                <li className="py-2">About Us</li>
                <li className="py-2">Menus</li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl">MENUS</h1>
              <ul className="py-3">
                <li className="py-2">Greek Pizza</li>
                <li className="py-2">Pepperoni</li>
                <li className="py-2">Menus</li>
              </ul>
            </div>
          </div>
          <div className="w-96 ">
            <div>
              <div>
                <h1 className="text-2xl">SOCIAL MEDIA</h1>
                <div className="flex items-center gap-x-3 py-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                    <FaFacebookF />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-sky-500 text-white flex items-center justify-center">
                    <FaTwitter />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500  to-orange-600 text-white flex items-center justify-center">
                    <AiFillInstagram />
                  </div>
                </div>
                <p>Get exclusive offers and coupon codes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
