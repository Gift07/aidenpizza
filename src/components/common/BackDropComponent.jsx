import { handleUpdateNotes, selectNotes } from "@/redux/features/appSlices";
import {
  addDressing,
  addType,
  changeTopping,
  removeExtra,
  selectOption,
  selectSauce,
} from "@/redux/features/orderSlices";
import { isEmpty } from "lodash";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BackDropComponent = ({ data }) => {
  const {
    selectedOption,
    selectedToppings,
    selectedExtra,
    selectedSauce,
    selectedDressing,
    selectedType,
  } = useSelector((state) => state.order);
  const kitchenNotes = useSelector(selectNotes);
  const dispatch = useDispatch();

  //handle toppings
  const handleToppingChange = (e) => {
    const { value } = e.target;
    const topping = data.additionalToppings.find(
      (topping) => topping.id.toString() === value
    );
    if (!isEmpty(topping)) {
      dispatch(changeTopping(topping));
    }
  };

  const handleChange = (e) => {
    dispatch(handleUpdateNotes(e));
  };

  //handle changing extraction
  const handleChangeExtra = (e) => {
    const { value } = e.target;
    const extra = data.extra.find((ext) => ext.id.toString() === value);
    if (!isEmpty(extra)) {
      if (selectedExtra.some((t) => t.id === extra.id)) {
        dispatch(removeExtra(extra));
      } else {
        dispatch(addExtra(extra));
      }
    }
  };

  //selecting the sause
  const handlSelectSauce = (e) => {
    const { value } = e.target;
    const sause = data.sauces.find((sauce) => sauce.id.toString() === value);
    if (!isEmpty(sause)) {
      dispatch(selectSauce(sause));
    }
  };

  //handle select toppings
  const handleSelectOptions = (e) => {
    const { value } = e.target;

    const option = data.options.find(
      (option) => option.id.toString() === value
    );

    if (!isEmpty(option)) {
      dispatch(selectOption(option));
    }
  };
  //handle select toppings
  const handleSelectType = (e) => {
    const { value } = e.target;
    const type = data.type.find((ty) => ty.id.toString() === value);

    if (!isEmpty(type)) {
      dispatch(addType(type));
    }
  };

  //handle select dressing
  const handleSelectDressing = (e) => {
    const { value } = e.target;
    const dressing = data.dressingChoice.find(
      (dress) => dress.id.toString() === value
    );

    if (!isEmpty(dressing)) {
      dispatch(addDressing(dressing));
    }
  };

  return (
    <div className="w-full h-full px-4 bg-white ">
      {!isEmpty(data.imageUrl) && (
        <div className="w-full h-48">
          <Image
            src={`/${data.imageUrl}`}
            alt="header"
            height={100}
            width={100}
            style={{ objectFit: "cover" }}
            className="w-full h-48"
          />
        </div>
      )}
      <div className="py-2">
        <h1>{data.description}</h1>
      </div>
      {/* options section */}
      {!isEmpty(data.options) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg">CHOOSE AN OPTION</h1>
            <h1 className="text-xs">Required Choose one</h1>
          </div>
          <div>
            {data.options.map((option, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    checked={selectedOption && selectedOption.id === option.id}
                    id={selectedOption && selectedOption.id}
                    type="radio"
                    value={option.id}
                    onChange={handleSelectOptions}
                    name={option.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    for="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {option.name}
                  </label>
                </div>
                <div>
                  <h1 className="font-medium">${option.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* options type */}
      {!isEmpty(data.type) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg">CHOOSE AN OPTION</h1>
            <h1 className="text-xs">Required Choose one</h1>
          </div>
          <div>
            {data.type.map((option, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    checked={selectedType.id === option.id}
                    id={selectedType.id}
                    type="radio"
                    value={option.id}
                    onChange={handleSelectType}
                    name={option.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    for="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {option.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* options section */}
      {!isEmpty(data.dressingChoice) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg">CHOOSE DRESSING CHOICE</h1>
            <h1 className="text-xs">Required Choose one</h1>
          </div>
          <div>
            {data.dressingChoice.map((dressing, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    checked={selectedDressing.id === dressing.id}
                    id={selectedDressing.id}
                    type="radio"
                    value={dressing.id}
                    onChange={handleSelectDressing}
                    name={dressing.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    for="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {dressing.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* sauce section */}
      {!isEmpty(data.sauces) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg uppercase">
              Substitute Sauce with
            </h1>
            <h1 className="text-xs">Select only one</h1>
          </div>
          <div>
            {data.sauces.map((sause, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    checked={selectedSauce?.id === sause.id}
                    id={sause.id}
                    type="radio"
                    value={sause.id}
                    onChange={handlSelectSauce}
                    name={sause.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    for="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {sause.name}
                  </label>
                </div>

                <div>
                  {sause.price > 0 && (
                    <h1 className="font-medium">${sause.price}</h1>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* adding extra items */}
      {!isEmpty(data.extra) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg">ADD EXTRA</h1>
          </div>
          <div>
            {data.extra.map((extra, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    id={extra.id}
                    type="checkbox"
                    value={extra.id}
                    onChange={handleChangeExtra}
                    checked={selectedExtra.some(
                      (t) => t.id.toString() === extra.id.toString()
                    )}
                    name={extra.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {extra.name}
                  </label>
                </div>
                <div>
                  <h1 className="font-medium">+${extra.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* adding extra items */}
      {!isEmpty(data.extraDressing) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg">ADD EXTRA DRESSING</h1>
          </div>
          <div>
            {data.extraDressing.map((extra, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    id={extra.id}
                    type="checkbox"
                    value={extra.id}
                    onChange={handleChangeExtra}
                    checked={selectedExtra.some(
                      (t) => t.id.toString() === extra.id.toString()
                    )}
                    name={extra.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {extra.name}
                  </label>
                </div>
                <div>
                  <h1 className="font-medium">+${extra.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* adding toppings */}
      {!isEmpty(data.additionalToppings) && (
        <div className="w-full pb-4">
          <div className="w-fulls flex items-center justify-between">
            <h1 className="font-extrabold text-lg">ADD TOPPINGS</h1>
          </div>
          <div>
            {data.additionalToppings.map((topping, i) => (
              <div
                key={i}
                className="flex items-center justify-between mb-3 border-b-[.5px] py-2"
              >
                <div className="flex items-center">
                  <input
                    id={topping.id}
                    type="checkbox"
                    value={topping.id}
                    onChange={handleToppingChange}
                    checked={selectedToppings.some(
                      (t) => t.id.toString() === topping.id.toString()
                    )}
                    name={topping.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 0"
                  >
                    {topping.name}
                  </label>
                </div>
                <div>
                  <h1 className="font-medium">+${topping.price}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* notes for the kitechen */}
      <div className="w-full h-40 bg-white py-2 mb-20">
        <label for="message" className="font-extrabold text-lg uppercase">
          Notes for the kitchen
        </label>
        <textarea
          id="message"
          rows="4"
          name="kitchenNotes"
          value={kitchenNotes}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
        />
        <h1>Have an allergy, dietary restriction, or special request?</h1>
      </div>
    </div>
  );
};

export default BackDropComponent;
