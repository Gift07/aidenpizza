import CartHeroComponent from "@/components/cart/CartHero";
import CartShopping from "@/components/cart/CartShopping";
import React from "react";

function CartScreen() {
  return (
    <div className="w-full h-screen fixed lg:relative overflow-hidden lg:overflow-auto">
      <CartHeroComponent />
      <CartShopping />
    </div>
  );
}

export default CartScreen;
