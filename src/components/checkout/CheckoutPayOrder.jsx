"use client";

import { useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFormData } from "@/redux/features/appSlices";

const CheckoutPayOrder = () => {
  const router = useRouter();
  const formData = useSelector(selectFormData);
  const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
  const [errorMessage, setMessage] = useState("");

  const initialOptions = {
    "client-id": "test",
    "enable-funding": "venmo",
    "disable-funding": "paylater,card",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  //handling on creating order
  const handleCreateOrder = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: cartTotalPrice,
        }),
      });

      const orderData = await response.json();

      console.log(orderData);

      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];

        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);

      setMessage(`Could not initiate PayPal Checkout...${error}`);
    }
  };

  //handling the approve
  const handleApprove = async (data, actions) => {
    console.log("got here");
    try {
      const response = await fetch(
        `/api/orders/${data.orderID}/capture`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const orderData = await response.json();

      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        return actions.restart();
      } else if (errorDetail) {
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else {
        const transaction = orderData.purchase_units[0].payments.captures[0];
        console.log(transaction);
        //after order has been completed
        const result = await fetch("api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            cart: cartItems,
            price: cartTotalPrice,
            user: formData,
            orderId: transaction.id,
          },
        });

        //check if there'sa result
        if (result) {
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);

      setMessage(`Sorry, your transaction could not be processed...${error}`);
    }
  };

  if (cartTotalPrice <= 0) {
    return router.push("/");
  }

  return (
    <div className="w-full bg-bgyellow h-auto lg:h-96 border border-secondary/20 p-4">
      <h1 className="text-xl font-bold lg:text-3xl lg:font-medium">
        Pay Order
      </h1>
      <hr />
      <div>
        <div className="w-full flex items-center justify-between py-2 text-lg">
          <h1>Items Price</h1>
          <h1>${cartTotalPrice}</h1>
        </div>
        <div className="w-full flex items-center justify-between py-2 text-lg">
          <h1>Shipping cost</h1>
          <h1>$0</h1>
        </div>
        <div className="w-full flex items-center justify-between py-2 text-lg">
          <h1>Total Price</h1>
          <h1>${cartTotalPrice}</h1>
        </div>
        <div className="w-full flex items-center justify-center pt-6">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{
                shape: "pill",
                layout: "vertical",
              }}
              createOrder={handleCreateOrder}
              onApprove={(data, actions) => handleApprove(data, actions)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayOrder;
