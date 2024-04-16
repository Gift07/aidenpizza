import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import Image from "next/image";

const AllItems = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <div className="w-full pl-44">
        <div className="flex text-2xl font-semibold items-center text-primary">
          All Items <hr className="w-24 h-1 bg-primary" />
        </div>
      </div>
      <div className="w-[80%] grid grid-cols-4 place-items-center gap-4 pt-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
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
                <h1 className="text-xl font-semibold">Seaweed Pizza</h1>
                <h1 className="text-xl font-semibold text-primary">$13.4</h1>
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
                <button className="bg-secondary w-56 h-14 rounded-full flex items-center justify-center text-white text-xl">
                  <FaCartShopping /> order now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
