"use client";

import Copyright from "@/components/common/Copyright";
import FooterComponent from "@/components/common/FooterComponent";
import NavBarComponent from "@/components/common/NavBarComponent";
import OwnPizzaModal from "@/components/common/OwnPizzaModal";
import AllItems from "@/components/menu/AllItems";
import HeroComponent from "@/components/menu/HeroComponent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenusScreen = () => {
  const dispatch = useDispatch();
  const { ownPizzaModal } = useSelector((state) => state.app);

  useEffect(() => {
    if (ownPizzaModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [ownPizzaModal]);

  return (
    <div className="w-full">
      <NavBarComponent />
      <HeroComponent />
      <AllItems />
      <FooterComponent />
      <Copyright />

      {ownPizzaModal && <OwnPizzaModal />}
    </div>
  );
};

export default MenusScreen;
