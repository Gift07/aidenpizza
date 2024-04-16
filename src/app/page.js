import Copyright from "@/components/common/Copyright";
import FooterComponent from "@/components/common/FooterComponent";
import NavBarComponent from "@/components/common/NavBarComponent";
import OurStory from "@/components/common/OurStory";
import OurStrength from "@/components/common/OurStrength";
import PizzaListings from "@/components/common/PizzaListings";
import Reservations from "@/components/common/Reservations";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center relative">
      <NavBarComponent />
      <div className="w-full relative flex items-center pt-16">
        <div className="absolute left-0 top-10">
          <Image
            src={"/black-jamun.png"}
            alt="header"
            height={200}
            width={200}
            className="w-36 h-72"
          />
        </div>
        <div className="absolute left-[500px] top-10 ">
          <Image
            src={"/onion.png"}
            alt="header"
            height={100}
            width={100}
            style={{ objectFit: "contain" }}
            className="w-36 h-72"
          />
        </div>
        <div className="w-full flex items-center justify-between pl-48  xl:w-[1680px] z-40">
          <div className="text-5xl font-semibold py-4">
            <h1>We have</h1>
            <h1>The best</h1>
            <div className="text-9xl bg-primary">
              <h1 className="text-white uppercase">pizza</h1>
            </div>
            <h1>in the city</h1>
            <span>
              <h1 className="text-sm py-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
            </span>
            <div>
              <button className="bg-secondary w-64 h-16 rounded-full flex items-center justify-center text-white text-xl">
                <FaCartShopping /> order now
              </button>
            </div>
          </div>
          <div className="pr-12">
            <Image
              src={"/banner-img.png"}
              alt="header"
              height={700}
              width={700}
            />
          </div>
        </div>
        <div className="absolute right-0 top-32">
          <div className="bg-secondary h-[900px] w-96 rounded-l-full relative">
            <div className="absolute bottom-2">
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
        <div className="absolute left-0 top-10">
          <Image
            src={"/daily-fresh.png"}
            alt="header"
            height={400}
            width={400}
          />
        </div>
        <div className="pl-[420px]">
          <h1 className="text-3xl">
            Daily fresh and <br />
            always tasty
          </h1>
          <p className="max-w-sm py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority haved
          </p>
        </div>
        <div className="pl-36">
          <Image src={"/onion.png"} alt="header" height={150} width={150} />
        </div>
        <div className="absolute right-44 bottom-0">
          <Image
            src={"/daily-fresh-vacter.png"}
            alt="header"
            height={200}
            width={200}
          />
        </div>
      </div>
      <PizzaListings />
      <OurStory />
      <OurStrength />
      <Reservations />
      <FooterComponent />
      <Copyright />
    </main>
  );
}
