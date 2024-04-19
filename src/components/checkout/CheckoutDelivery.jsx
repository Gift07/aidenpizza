import React from "react";
import CheckoutPayOrder from "./CheckoutPayOrder";

const CheckoutDelivery = () => {
  return (
    <div className="w-full flex items-center justify-center py-3">
      <div className="w-[80%] flex items-start gap-x-10">
        <div className="w-full">
          <div>
            <h1 className="text-3xl font-medium">Add Billing Address</h1>
          </div>
          <div className="w-full">
            <div className="w-full flex items-center gap-x-3">
              <div className="mb-3 w-full">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            <div className="flex items-center gap-x-3">
              <div className="mb-3 w-full">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            <div className="flex items-center gap-x-3">
              <div className="mb-3 w-full">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
          </div>
        </div>
        <div className="w-1/3">
          <div>
            <h1 className="text-3xl font-medium pb-6">Your Order</h1>
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
