"use client";

import Copyright from "@/components/common/Copyright";
import FooterComponent from "@/components/common/FooterComponent";
import NavBarComponent from "@/components/common/NavBarComponent";
import OurStory from "@/components/common/OurStory";
import OurStrength from "@/components/common/OurStrength";
import OwnPizzaModal from "@/components/common/OwnPizzaModal";
import PizzaListings from "@/components/common/PizzaListings";
import Reservations from "@/components/common/Reservations";
import { handleOwnPizzaModal } from "@/redux/features/appSlices";
import { isEmpty } from "lodash";
import Image from "next/image";
import { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
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
    <div className="relative overflow-hidden">
      <main className="w-full min-h-screen flex flex-col items-center relative">
        <NavBarComponent />
        <Hero dispatch={dispatch} />
        <PizzaListings />
        <OurStory />
        <OurStrength />
        <Reservations />
        <FooterComponent />
        <Copyright />
      </main>
      {ownPizzaModal && <OwnPizzaModal />}
    </div>
  );
}

const Hero = ({ dispatch }) => {
  const handleCreateOwnPizza = async () => {
    const res = await fetch("/api/specialmenus?status=own-pizza");
    const response = await res.json();
    if (!isEmpty(response.data)) {
      dispatch(handleOwnPizzaModal({ data: response.data }));
    }
  };
  return (
    <div className="w-screen">
      <div className="w-full relative flex items-center text-sm">
        <div className="absolute left-0 -top-5 hidden lg:flex">
          <Image
            src={"/onion.png"}
            alt="header"
            height={100}
            width={100}
            style={{ objectFit: "contain" }}
            className="w-36 h-72 float"
          />
        </div>
        <div className="w-full flex items-center justify-between px-4  lg:px-20  z-40 pt-20">
          <div className="text-2xl lg:text-5xl py-4 ">
            <h1 className="Coolvetica font-semibold ">We have the best</h1>

            <div className="text-[100px] lg:text-[200px] brush font-semibold leading-[110px] lg:leading-[150px]">
              <h1 className=" bg-gradient-to-br from-red-400 via-red-600 to-red-900 bg-clip-text text-transparent">
                Pizza
              </h1>
            </div>
            <h1 className="Coolvetica font-semibold ">in the city</h1>

            <p className="text-sm py-2 brush">
              Discover a new favorite by trying the top pizzas in Bethesda.
            </p>

            <div>
              <button
                onClick={handleCreateOwnPizza}
                className="bg-primary lg:bg-secondary w-56 gap-x-2 h-12 rounded-lg border border-yellow-500  flex items-center justify-center text-white text-lg"
              >
                <FaCartShopping /> Create Own Pizza
              </button>
            </div>
          </div>
          <div className="lg:pr-12  rotate hidden lg:flex">
            <Image
              src={"/banner-img.png"}
              alt="header"
              height={600}
              width={600}
            />
          </div>
        </div>
        <div className="absolute right-0 top-20 lg:top-32">
          <div className="bg-secondary h-[600px] lg:h-[900px] w-96 rounded-l-full relative">
            <div className="absolute bottom-2 float">
              <Image
                src={"/banner-img-bottom.png"}
                alt="header"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex items-center h-[400px]">
        <div className="absolute left-0 top-10 hidden lg:flex">
          <Image
            src={"/daily-fresh.png"}
            alt="header"
            height={400}
            width={400}
          />
        </div>
        <div className="pl-[420px]">
          <h1 className="text-3xl Coolvetica">
            Daily fresh and <br />
            always tasty
          </h1>
          <p className="max-w-sm py-3 text-black/70">
            You can get your pizza to go with curbside pickup from Aden Pizza &
            Mediterranean. Grab something tasty on your way home.
          </p>
        </div>
        <div className="pl-36">
          <Image src={"/onion.png"} alt="header" height={150} width={150} />
        </div>
        <div className="absolute right-44 bottom-0 hidden lg:flex">
          <Image
            src={"/daily-fresh-vacter.png"}
            alt="header"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};
