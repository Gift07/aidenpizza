"use client";

import React, { useState } from "react";
import CheckoutPayOrder from "./CheckoutPayOrder";
import { useDispatch, useSelector } from "react-redux";
import {
  handleUpdateFormData,
  selectFormData,
} from "@/redux/features/appSlices";

const CheckoutDelivery = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleUpdateFormData({ name, value }));
  };

  return (
    <div className="w-full flex items-center justify-center py-3">
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row items-start lg:gap-x-10 px-4 lg:px-0">
        <div className="w-full">
          <div>
            <h1 className="text-xl font-bold lg:text-3xl lg:font-medium">
              Add Shipping Address
            </h1>
          </div>
          <div className="w-full lg:w-[80%] border border-black/10 rounded-lg bg-black/5 px-3 py-5">
            <div className="w-full flex flex-col lg:flex-row items-center gap-x-3 ">
              <div className="mb-3 w-full">
                <label
                  htmlFor="name-input"
                  className="block  text-sm font-medium text-black/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  htmlFor="email-input"
                  className="block  text-sm font-medium text-black/70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center gap-x-3 ">
              <div className="mb-3 w-full">
                <label
                  htmlFor="phone-input"
                  className="block  text-sm font-medium text-black/70"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone-input"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  htmlFor="location-input"
                  className="block  text-sm font-medium text-black/70"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location-input"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                />
              </div>
            </div>
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
