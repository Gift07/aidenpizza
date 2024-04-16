import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="w-full relative ">
      <div className="absolute left-0 top-10">
        <Image
          src={"/black-jamun.png"}
          alt="header"
          height={200}
          width={200}
          className="w-36 h-72"
        />
      </div>
      <div className="absolute right-[500px] top-0 ">
        <Image
          src={"/onion.png"}
          alt="header"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          className="w-36 h-72"
        />
      </div>
      <div className="w-full flex items-center justify-center py-6">
        <div className="w-[80%] flex items-center justify-between h-[600px]">
          <div className="w-full h-full">
            <Image
              src={"/our-story.png"}
              alt="header"
              height={800}
              width={800}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="h-full w-full flex items-center pl-12">
            <div>
              <div className="flex text-2xl font-semibold items-center text-primary">
                Our Story <hr className="w-24 h-1 bg-primary" />
              </div>
              <h1 className="text-3xl font-semibold py-2">
                The Pizzon Has Excellent
                <br /> Of Quality Foods
              </h1>
              <p className="max-w-xl py-3">
                {`  Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              </p>
              <div>
                <button className="bg-secondary w-56 h-14 rounded-full flex items-center justify-center text-white text-xl">
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
