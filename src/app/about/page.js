import AboutHeroComponent from "@/components/about/AboutHero";
import AboutInfo from "@/components/about/AboutInfo";
import Copyright from "@/components/common/Copyright";
import FooterComponent from "@/components/common/FooterComponent";
import NavBarComponent from "@/components/common/NavBarComponent";
import React from "react";

const AboutScreen = () => {
  return (
    <div className="w-full">
      <NavBarComponent />
      <AboutHeroComponent />
      <AboutInfo />
      <FooterComponent />
      <Copyright />
    </div>
  );
};

export default AboutScreen;
