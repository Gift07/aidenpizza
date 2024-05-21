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
                {`  A Slice partner for 13 years, this restaurant is a mainstay of
                the community. Try them for yourself and see why they're such a
                local favorite. You can get your pizza to go with curbside
                pickup from Aden Pizza & Mediterranean. Grab something tasty on
                your way home.`}
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
