import { useState } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { tabs } from "./tabsData";
import { ReactComponent as BackgroundTabs } from "../../assets/icons/backgroundTabs.svg";
import { HumanResources } from "./components/tabs/HumanResources";
import { BlockChain } from "./components/tabs/BlockChain";
import { WareHouse } from "./components/tabs/WareHouse";
import { ProjectManager } from "./components/tabs/ProjectManager";
import { AccountModule } from "./components/tabs/AccountingModule";

import classes from "./BlockChainInteg.module.scss";

const arrayTabsCollection = [
  <HumanResources />,
  <ProjectManager />,
  <AccountModule />,
  <WareHouse />,
  <BlockChain />,
];

const TabsCollection = {
  1: <HumanResources />,
  2: <ProjectManager />,
  3: <AccountModule />,
  4: <WareHouse />,
  5: <BlockChain />,
};

export const BlockChainInteg = () => {
  const [chooseTab, setChoosseTab] = useState(1);

  const handleChooseTab = (id) => {
    setChoosseTab(id);
  };

  const BodyMainTab = (id) => TabsCollection[id];

  return (
    <div className={classes.root}>
      <div className={cn(classes.header, "header_section")}>
        Blockchain integrations
        <div className={classes.headerDescription}>
          an advanced blockchain functionality for various company departments,
          ensuring essential instruments for each of them.
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.infoTab}>
          <div className={classes.infoDescription}>
            To define the usefulness of MeGaHub, let’s consider the
            functionality for each department by modules in detail:
          </div>

          <div className={classes.listTabs}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(classes.tab, {
                  [classes.activeTab]: tab.id === chooseTab,
                })}
                onClick={() => handleChooseTab(tab.id)}
              >
                <div className={classes.icon}>{tab.icon}</div>
                <div className={classes.title}>{tab.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.mainInfoTab}>
          <BackgroundTabs className={classes.backgroundTabs} />

          {BodyMainTab(chooseTab)}
        </div>
      </div>

      <div className={classes.bodySmall}>
        <div className={classes.infoDescription}>
          To define the usefulness of MeGaHub, let’s consider the functionality
          for each department by modules in detail:
        </div>

        <div className={classes.slider}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {arrayTabsCollection.map((tab, index) => (
              <SwiperSlide>
                <div className={classes.tabArray} key={index}>
                  <div className={classes.sliderBody}>
                    <BackgroundTabs className={classes.backgroundTabs} />
                    {tab}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
