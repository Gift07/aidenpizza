import Image from "next/image";
import React from "react";

function AboutHeroComponent() {
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
      <div className="absolute right-0 top-0">
        <Image src={"/banner-leaf.png"} alt="header" height={100} width={100} />
      </div>
      <div className="absolute left-[500px] top-10 ">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] flex flex-col justify-center pt-32">
          <div className="flex text-2xl font-semibold items-center text-primary">
            Who are we <hr className="w-24 h-1 bg-primary" />
          </div>
          <div className="text-3xl font-semibold py-2">About Us</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroComponent;
