"use client";

import React, { useState } from "react";
import AllItems from "./AllItems";
import GourmetPizza from "./GourmetPizza";
import KebabEntres from "./KebabEntres";
import PastaEntres from "./PastaEntres";
import Soups from "./Soups";
import Desserts from "./Desserts";
import Bevarages from "./Bevarages";

const TabComponent = () => {
  const [tabIndexChosen, setTabIndexChosen] = useState(0);
  const [tabsAvailable, setTabsAvailable] = useState([
    { id: 1, tab_name: "All Items" },
    { id: 2, tab_name: "Gourmet Pizza" },
    { id: 3, tab_name: "Kebab Entres" },
    { id: 3, tab_name: "Pasta Entres" },
  ]);

  // -> render tabs available
  const renderTabsAvailable = () => {
    if (!isEmpty(tabsAvailable)) {
      const _tabsData = map(tabsAvailable, (tab) => tab);

      return (
        <div className="flex flex-row border-b-[1px] border-gray-200 my-3">
          {_tabsData.map((tab, index) => {
            return <div key={index}>Hello</div>;
          })}
        </div>
      );
    }
  };

  // -> render tab views (views render according to the tab that's chosen)
  const renderTabsViews = () => {
    switch (tabIndexChosen) {
      case 0:
        return <AllItems />;
      case 1:
        return <GourmetPizza />;
      case 2:
        return <KebabEntres />;
      case 3:
        return <PastaEntres />;
      case 4:
        return <Desserts />;
      case 5:
        return <Bevarages />;
      default:
        return <Soups />;
    }
  };
  return (
    <div className="w-full">
      {renderTabsAvailable()}
      {renderTabsViews()}
    </div>
  );
};

export default TabComponent;
