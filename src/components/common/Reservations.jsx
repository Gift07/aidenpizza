import Image from "next/image";
import React from "react";

function Reservations() {
  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-full px-4 lg:px-0 lg:pl-40">
            <div className="w-full flex text-xl lg:text-2xl font-semibold items-center text-primary">
              About Us <hr className="w-24 h-1 bg-primary" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold py-2 Coolvetica">
              Know More About Aden Pizzeria
            </h1>
            <div>
              <p>
                {`Discover a new favorite by trying the top pizzas in Bethesda.
                Local residents have made Aden Pizza & Mediterranean one 
                of the
                most popular in the area. Sample what they have to offer and see
                if you agree. Many pizzerias in Bethesda offer more than just
                pizza, so try some other local top dishes. Pasta, salads,
                calzones, sandwiches, and more can all give you something
                different to enjoy. Don't forget to try Create Your Own Pizza
                for a truly local experience. You haven't really been to
                Bethesda until you've tried it! Add french fries to your pizza
                to make for a more substantial meal. Aden Pizza & Mediterranean
                has plenty of offerings to make sure you won't go away hungry.`}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-full rotate">
            <Image
              src={"/reservation-pizza.png"}
              alt="header"
              height={800}
              width={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
