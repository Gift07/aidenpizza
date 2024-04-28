import React from "react";
import CheckoutPayOrder from "./CheckoutPayOrder";

const CheckoutDelivery = () => {
  return (
    <div className="w-full flex items-center justify-center py-3">
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-rowitems-start lg:gap-x-10 px-4 lg:px-0">
        <div className="w-full">
          <div>
            <h1 className="text-xl font-bold lg:text-3xl lg:font-medium">
              Add Billing Address
            </h1>
          </div>
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
        <div className="w-full lg:w-1/3">
          <div>
            <h1 className="text-xl font-bold lg:text-3xl lg:font-medium py-3">
              Your Order
            </h1>
          </div>
          <div>
            <CheckoutPayOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDelivery;
