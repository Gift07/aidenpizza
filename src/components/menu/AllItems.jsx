"use client";

import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { isEmpty } from "lodash";

const AllItems = () => {
  const tabs = [
    "GOURMET PIZZA",
    "APPETIZERS",
    "SOUPS",
    "GOURMET SALAD",
    "WINGS",
    "EXTRAS",
    "PIDE",
    "SUBS",
    "SANDWICHES",
    "WRAPS",
    "LAHMACUN",
    "PASTA",
    "PASTA ENTREES",
    "KEBAB ENTREES",
    "DESSERTS",
    "BEVERAGES",
  ];
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPizza = async () => {
      setLoading(true);
      console.log("got int the fn");
      const res = await fetch(`/api/menus`);
      const response = await res.json();

      setMenus(response.data);
      setLoading(false);
    };
    getPizza();
  }, []);
  return (
    <div className="relative">
      {loading ? (
        <div className="w-full flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-8 lg:py-16">
          <div className="w-full px-4  lg:px-20">
            <div className="flex text-2xl font-semibold items-center text-primary">
              All Items <hr className="w-24 h-1 bg-primary" />
            </div>
          </div>
          <div className="w-full px-4 lg:px-20">
            {tabs.map((tab, i) => {
              const items = isEmpty(menus) ? [] : menus[tab];
              return (
                <div key={i} className="w-full py-12">
                  <div>
                    <h1 className="text-xl font-semibold py-2">{tab}</h1>
                  </div>
                  <MenuItems menus={items} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllItems;
