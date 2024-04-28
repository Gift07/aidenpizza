"use client";

import { handleOwnPizzaModal } from "@/redux/features/appSlices";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import BackDropComponent from "./BackDropComponent";

const OwnPizzaModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen overflow-hidden z-[2000] fixed top-0 backdrop-blur-md">
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white w-[90%] lg:w-[700px] h-[90%] relative">
          <div className="w-full h-16 bg-green-500 z-[200]">
            <div className="w-full h-full px-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-extrabold">Make Your Own Pizza</h1>
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
          <div className="w-full flex-1 overflow-y-auto h-[90%]">
            <BackDropComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnPizzaModal;
