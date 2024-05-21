import Image from "next/image";
import React from "react";

const OurStrength = () => {
  const strengths = [
    {
      id: "1",
      imageUrl: "all-kinds-of-foods.png",
      title: "All Kinds of Foods",
      description: "We offer a wide variety of foods to cater to all tastes.",
    },
    {
      id: "2",
      imageUrl: "best-taste.png",
      title: "Best Taste",
      description: "Our recipes are crafted to ensure the best taste.",
    },
    {
      id: "3",
      imageUrl: "fresh-foods.png",
      title: "Fresh Foods",
      description: "We use only the freshest ingredients in our dishes.",
    },
    {
      id: "4",
      imageUrl: "on-time-delivery.png",
      title: "On-time Delivery",
      description:
        "We guarantee timely delivery for a great dining experience.",
    },
  ];
  return (
    <div className="w-full relative bg-bgyellow py-10 my-10">
      <div className="w-full flex items-center justify-center px-4 lg:px-0">
        <div className="lg:w-[80%] w-full">
          <div className="flex text-xl lg:text-2xl font-semibold items-center text-primary ">
            Our Strength <hr className="w-24 h-1 bg-primary " />
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold py-2 Coolvetica">
            Why we are the best
          </h1>
        </div>
      </div>
      <div className="absolute right-0 top-10 hidden lg:flex">
        <Image
          src={"/strength-vacter.png"}
          alt="header"
          height={200}
          width={300}
        />
      </div>
      <div className="absolute right-0 top-10 lg:hidden flex">
        <Image
          src={"/strength-vacter.png"}
          alt="header"
          height={100}
          width={150}
        />
      </div>
      <div className="w-full flex items-center justify-center py-12 px-4 lg:px-0">
        <div className="lg:w-[80%] flex items-center lg:flex-row flex-col">
          {strengths.map((strength, i) => (
            <div key={i}>
              <Image
                src={`/${strength.imageUrl}`}
                alt="header"
                height={50}
                width={50}
              />
              <div className="py-3">
                <h1 className="text-3xl font-medium Coolvetica truncate">
                  {strength.title}
                </h1>
                <p className="max-w-md py-3 text-black/70">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
