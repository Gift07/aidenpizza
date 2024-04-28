import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="w-full relative py-10">
      <div className="absolute left-0 top-10 hidden lg:flex">
        <Image
          src={"/black-jamun.png"}
          alt="header"
          height={200}
          width={200}
          className="w-36 h-72"
        />
      </div>
      <div className="absolute left-0 top-10 lg:hidden flex">
        <Image src={"/black-jamun.png"} alt="header" height={60} width={60} />
      </div>
      <div className="absolute right-2 top-0 hidden lg:flex">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          className="w-36 h-72"
        />
      </div>
      <div className="absolute right-2 -top-4 lg:hidden flex">
        <Image
          src={"/onion.png"}
          alt="header"
          height={80}
          width={80}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full flex items-center justify-center py-6">
        <div className="w-full px-4 lg:px-10 flex items-center justify-between flex-col lg:flex-row ">
          <div className="w-full h-full">
            <Image
              src={"/our-story.png"}
              alt="header"
              height={800}
              width={800}
              className="float"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="h-full w-full flex items-center lg:pl-12">
            <div>
              <div className="flex px-xl lg:text-2xl font-semibold items-center text-primary">
                Our Story <hr className="w-24 h-1 bg-primary" />
              </div>
              <h1 className="text-2xl lg:text-3xl font-semibold py-2 Coolvetica">
                The Pizzon Has Excellent
                <br /> Of Quality Foods
              </h1>
              <p className="max-w-xl py-3 text-black/70 text-sm">
                {`  Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              </p>
              <div>
                <button className="bg-secondary px-10 py-2 rounded-lg flex items-center justify-center text-white ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
