import Copyright from "@/components/common/Copyright";
import FooterComponent from "@/components/common/FooterComponent";
import NavBarComponent from "@/components/common/NavBarComponent";
import AllItems from "@/components/menu/AllItems";
import HeroComponent from "@/components/menu/HeroComponent";
import React from "react";

const MenusScreen = () => {
  return (
    <div className="w-full">
      <NavBarComponent />
      <HeroComponent />
      <AllItems />
      <FooterComponent />
      <Copyright />
    </div>
  );
};

export default MenusScreen;
