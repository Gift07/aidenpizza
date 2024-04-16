import Image from "next/image";
import React from "react";

function HeroComponent() {
  return (
    <div className="w-full bg-bgyellow relative h-[400px]">
      <div className="absolute left-0 top-10">
        <Image
          src={"/black-jamun.png"}
          alt="header"
          height={200}
          width={200}
          className="w-36 h-72"
        />
      </div>
      <div className="absolute left-[500px] top-10 ">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          className="w-36 h-72"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] flex flex-col justify-center pt-32">
          <div className="flex text-2xl font-semibold items-center text-primary">
            Popular dishes <hr className="w-24 h-1 bg-primary" />
          </div>
          <div className="text-3xl font-semibold py-2">Browse Our Menu</div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
