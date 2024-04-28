import Image from "next/image";
import React from "react";

function Reservations() {
  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-full px-4 lg:px-0 lg:pl-40">
            <div className="w-full flex text-xl lg:text-2xl font-semibold items-center text-primary">
              Reservations <hr className="w-24 h-1 bg-primary" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold py-2 Coolvetica">
              Book a Table Now
            </h1>
            <div className="w-full lg:w-[80%] border border-black/10 rounded-lg bg-black/5 px-3 py-5">
              <div className="w-full flex flex-col lg:flex-row items-center gap-x-3 ">
                <div className="mb-3 w-full">
                  <label
                    for="base-input"
                    className="block  text-sm font-medium text-black/70"
                  >
                    Base input
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  />
                </div>
                <div className="mb-3 w-full">
                  <label
                    for="base-input"
                    className="block text-sm font-medium text-black/70 "
                  >
                    Base inputs
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-x-3">
                <div className="mb-3 w-full">
                  <label
                    for="base-input"
                    className="block text-sm font-medium text-black/70"
                  >
                    Base input
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  />
                </div>
                <div className="mb-3 w-full">
                  <label
                    for="base-input"
                    className="block text-sm font-medium text-black/70"
                  >
                    Base input
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-x-3">
                <div className="mb-3 w-full">
                  <label
                    for="base-input"
                    className="block text-sm font-medium text-black/70"
                  >
                    Base input
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  />
                </div>
                <div className="mb-3 w-full">
                  <label
                    for="base-input"
                    class="block text-sm font-medium text-black/70"
                  >
                    Base input
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  />
                </div>
              </div>
              <button className="bg-secondary  w-full py-2 rounded-lg flex items-center justify-center text-white ">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-full rotate">
            <Image
              src={"/reservation-pizza.png"}
              alt="header"
              height={800}
              width={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
