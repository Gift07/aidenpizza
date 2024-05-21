"use client";

import {
  handleOwnPizzaModal,
  selectPizzaData,
} from "@/redux/features/appSlices";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import BackDropComponent from "./BackDropComponent";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import {
  cleanupOrder,
  createOrder,
  selectOption,
} from "@/redux/features/orderSlices";

import { isEmpty } from "lodash";
import { addItemToCart } from "@/redux/features/cartSlices";
import { createMyOrder } from "@/helpers";

const OwnPizzaModal = () => {
  const dispatch = useDispatch();
  const pizzaData = useSelector(selectPizzaData);
  const {
    totalPrice,
    selectedOption,
    selectedToppings,
    selectedExtra,
    selectedSause,
    selectedDressing,
    selectedType,
  } = useSelector((state) => state.order);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(selectOption(pizzaData[0].options[0]));
  }, [dispatch, pizzaData]);
  // incrementing the quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  //decrementing the pizza quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  //adding items to cart
  const handleAddTocart = () => {
    const order = createMyOrder({
      selectedOption,
      selectedToppings,
      selectedExtra,
      selectedType,
      selectedDressing,
      selectedSauce: selectedSause,
      itemName: pizzaData[0].name,
      quantity,
      totalPrice,
    });

    if (!isEmpty(order)) {
      dispatch(addItemToCart(order));
      dispatch(handleOwnPizzaModal({ data: null }));
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden z-[2000] fixed top-0 backdrop-blur-md">
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white w-[90%] lg:w-[700px] h-[90%] relative rounded-3xl border border-gray-300">
          <div className="w-full h-16 bg-gray-200 z-[200] rounded-t-3xl">
            <div className="w-full h-full px-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-extrabold">{pizzaData[0].name}</h1>
              </div>
              <div
                onClick={() => {
                  dispatch(handleOwnPizzaModal({ data: null }));
                  dispatch(cleanupOrder());
                }}
                className="h-6 w-6 rounded-full flex items-center justify-center bg-white"
              >
                <MdClose />
              </div>
            </div>
          </div>
          <div className="w-full flex-1 overflow-y-auto h-[90%]">
            <BackDropComponent data={pizzaData[0]} />
          </div>
          <div className="w-full h-20 bg-gray-200 rounded-b-3xl absolute bottom-0">
            <div className="w-full flex items-center justify-between px-2 h-full">
              <div className="flex items-center gap-x-6 text-2xl font-semibold">
                <div onClick={handleDecrement} className="cursor-pointer">
                  <AiOutlineMinus />
                </div>
                <div>
                  <h1>{quantity}</h1>
                </div>
                <div onClick={handleIncrement} className="cursor-pointer">
                  <FaPlus />
                </div>
              </div>
              <div>
                <button
                  onClick={handleAddTocart}
                  className="bg-black w-56 gap-x-2 h-12 rounded-lg border border-black  flex items-center justify-between text-white text-lg px-2"
                >
                  <span>Add To cart</span>
                  <span>${(quantity * totalPrice).toFixed(2)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnPizzaModal;
