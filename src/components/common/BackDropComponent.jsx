import React, { useState } from "react";

const BackDropComponent = () => {
  const [option, setOption] = useState({});
  const [toppings, setToppings] = useState([]);
  const [dressing, setDressing] = useState([]);
  const [extra, setExtra] = useState([]);
  const [protein, setProtease] = useState([]);

  return (
    <div className="w-full h-full px-4 bg-white">
      <div className="py-2">
        <h1>
          Green and red peppers, Kalamata olives, feta cheese and mozzarella
          cheese with tomato sauce.
        </h1>
      </div>
      {/* options section */}
      <div className="w-full pb-4">
        <div className="w-fulls flex items-center justify-between">
          <h1 className="font-extrabold text-lg">CHOOSE AN OPTION</h1>
          <h1 className="text-xs">Required Choose one</h1>
        </div>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
            >
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                />
                <label
                  for="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 0"
                >
                  Default radio
                </label>
              </div>
              <div>
                <h1 className="font-medium">$14.95</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* adding toppings */}
      <div className="w-full pb-4">
        <div className="w-fulls flex items-center justify-between">
          <h1 className="font-extrabold text-lg">ADD TOPPINGS</h1>
        </div>
        <div>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
            >
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                />
                <label
                  for="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 0"
                >
                  Extra cheese
                </label>
              </div>
              <div>
                <h1 className="font-medium">+$1.95</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* notes for the kitechen */}
      <div className="w-full h-40 bg-white px-4 py-2 ">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
    </div>
  );
};

export default BackDropComponent;
