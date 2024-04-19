import CartHeroComponent from "@/components/cart/CartHero";
import CartShopping from "@/components/cart/CartShopping";
import React from "react";

function CartScreen() {
  return (
    <div className="w-full">
      <CartHeroComponent />
      <CartShopping />
    </div>
  );
}

export default CartScreen;
