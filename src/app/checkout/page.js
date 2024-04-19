import CheckoutDelivery from "@/components/checkout/CheckoutDelivery";
import CheckoutHeroComponent from "@/components/checkout/CheckoutHero";
import React from "react";

const CheckoutScreen = () => {
  return (
    <div className="w-full">
      <CheckoutHeroComponent />
      <CheckoutDelivery />
    </div>
  );
};

export default CheckoutScreen;
