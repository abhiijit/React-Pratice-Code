import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import "./Tab.css";
const TabFormComponent = () => {
  const [data, setData] = useState(
    {
      name: 'Abhijit',
      age: 32,
      email : 'abhijit@gmail.com',
      interest: ['cricket', 'coding'],
      setting: 'drak'
    }
  )
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <>
      <div className="heading-container">
        {tabs?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`heading ${activeTab === index ? 'activeTabBg' : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {item.name}
              </div>
            </>
          );
        })}
      </div>
      <div className="activeTabComp">
        <ActiveTabComponent data={data} setData={setData}/>
      </div>
    </>
  );
};

export default TabFormComponent;
