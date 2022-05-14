import { useState } from "react";
import cn from "classnames";

import { MainInfoTabs } from "./mainInfoTab";
import { tabs } from "./tabs";
import classes from "./Challenges.module.scss";

const ChooseMainTab = (id) =>
  MainInfoTabs.map(
    (tab) =>
      tab.id === id && (
        <div style={{ padding: "0 38px" }}>
          <div className={classes.bodyInfoTab}>
            <div className={classes.header}>{tab.header}</div>
            <div className={classes.description}>{tab.description}</div>

            <div className={classes.iconMain}>{tab.icon}</div>
          </div>
        </div>
      )
  );

export const Challenges = () => {
  const [chooseTab, setChoosseTab] = useState(1);

  return (
    <div className={classes.root}>
      <div className={cn("header_section", classes.header)}>
        What challenges can MeGaHub overcome?
      </div>
      <div className={classes.wrapperTabs}>
        <div className={classes.tabsBlock}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(classes.tab, {
                [classes.activeTab]: tab.id === chooseTab,
              })}
              onClick={() => setChoosseTab(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      {ChooseMainTab(chooseTab)}
    </div>
  );
};
