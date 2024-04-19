"use client";

import { handleOwnPizzaModal } from "@/redux/features/appSlices";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const OwnPizzaModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen overflow-hidden z-[2000] fixed top-0 backdrop-blur-md">
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-yellow-500 p-4 rounded-2xl w-[700px] h-[90%]">
          <div className="w-full flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Make Your Own Pizza</h1>
            </div>
            <div
              onClick={() => {
                dispatch(handleOwnPizzaModal());
              }}
              className="h-6 w-6 rounded-full flex items-center justify-center bg-white"
            >
              <MdClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnPizzaModal;
