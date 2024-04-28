import Image from "next/image";
import React from "react";

function HeroComponent() {
  return (
    <div className="w-full bg-bgyellow relative h-[150px] lg:h-[250px]">
      <div className="absolute left-0 top-10 hidden lg:flex">
        <Image src={"/black-jamun.png"} alt="header" height={100} width={100} />
      </div>
      <div className="absolute left-0 top-10 lg:hidden flex">
        <Image src={"/black-jamun.png"} alt="header" height={60} width={60} />
      </div>
      <div className="absolute left-[500px] top-10 hidden lg:flex">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full flex items-center px-4 lg:px-20">
        <div className="flex flex-col justify-center pt-10 lg:pl-0 pl-10 lg:pt-32">
          <div className="flex text-lg lg:text-2xl font-semibold items-center text-primary">
            Popular dishes <hr className="w-24 h-1 bg-primary" />
          </div>
          <div className="text-xl lg:text-3xl font-semibold py-2">
            Browse Our Menu
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
