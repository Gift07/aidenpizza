"use client";

import {
  decrementItemQuantity,
  incrementItemQuantity,
} from "@/redux/features/cartSlices";
import { isEmpty } from "lodash";
import Image from "next/image";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartTable = ({ cartItems }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative overflow-x-auto overflow-y-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 py-4">
          <tr>
            <th scope="col" className="px-2 lg:px-6 py-3 lg:py-5">
              Product
            </th>
            <th scope="col" className="px-2 lg:px-6 py-3 lg:py-5">
              Price
            </th>
            <th scope="col" className="px-2 lg:px-6 py-3 lg:py-5">
              Quantity
            </th>
            <th scope="col" className="px-2 lg:px-6 py-3 lg:py-5">
              Total
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, i) => (
            <tr key={i} className="bg-white border-b text-lg">
              <th
                scope="row"
                className="px-2 lg:px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex items-center gap-x-2">
                  {!isEmpty(item.imageUrl) && (
                    <div className="hidden lg:flex">
                      <Image
                        src={`/${item.imageUrl}`}
                        alt="header"
                        height={100}
                        width={100}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                  <h1 className=" text-sm lg:text-lg max-w-[120px] truncate">
                    {item.name}
                  </h1>
                </div>
              </th>
              <td className="px-2 lg:px-6 py-4 text-sm lg:text-lg">
                ${item.price}
              </td>
              <td className="px-2 lg:px-6 py-4">
                <div className="flex items-center gap-x-2 lg:gap-x-3">
                  <div
                    onClick={() => {
                      dispatch(incrementItemQuantity(item.name));
                    }}
                    className="bg-primary/30 border border-primary h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center text-primary text-sm lg:text-xl rounded-full"
                  >
                    <AiOutlinePlus />
                  </div>
                  <div>
                    <h1 className="text-black text-sm font-medium lg:font-normal lg:text-2xl">
                      {item.quantity}
                    </h1>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(decrementItemQuantity(item.name));
                    }}
                    className="bg-primary/30 border border-primary h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center text-primary text-sm lg:text-xl rounded-full"
                  >
                    <AiOutlineMinus />
                  </div>
                </div>
              </td>
              <td className="px-2 lg:px-6 py-4 text-sm lg:text-lg font-medium lg:font-normal">
                ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              </td>
              <td className="px-2 lg:px-6 py-4 text-xl text-red-500">
                <RiDeleteBin6Line />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
