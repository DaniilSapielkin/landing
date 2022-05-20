import { useState, useContext } from "react";
import Hamburger from "hamburger-react";

import { ReactComponent as MainBackground } from "../../assets/images/mainFon.svg";
import { ReactComponent as MainImage } from "../../assets/images/1.1.svg";
import { ReactComponent as IconMain } from "../../assets/icons/iconMain.svg";
import { ReactComponent as IconMail } from "../../assets/icons/mail.svg";
import { ReactComponent as IconPhone } from "../../assets/icons/phone.svg";
import { ReactComponent as IconMainMini } from "../../assets/icons/iconPhoneMain.svg";
import { Context } from "../../App";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import classes from "./Main.module.scss";

export const Main = () => {
  const { handleOpenModal } = useContext(Context);
  const [isOpenMenuBurger, setIsOpenMenuBurger] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.backgMain}>
        <MainBackground />
      </div>

      <div className={classes.backgMainMini}>
        <IconMainMini />
      </div>

      <div className={classes.wrapper}>
        {/* Header */}
        <div className={classes.header}>
          <div>
            <IconMain />
          </div>

          <div className={classes.infoHeader}>
            <div className={classes.infoContact}>
              <IconPhone />
              <div> +380 (66) 026-28-38</div>|<div>+44 (20) 3807 7556</div>
            </div>
            <div className={classes.infoContact}>
              <IconMail />
              <div>info@megadevllc.com</div>
            </div>

            <div className={classes.bntMoreAs} onClick={handleOpenModal}>
              More about as
            </div>
          </div>

          <div className={classes.humburgerMenu}>
            <div className={classes.menuIcon}>
              <Hamburger
                toggled={isOpenMenuBurger}
                toggle={setIsOpenMenuBurger}
              />
            </div>
          </div>

          {isOpenMenuBurger && (
            <div className={classes.menuBody}>
              <BurgerMenu />
            </div>
          )}
        </div>

        {/* Main */}
        <div className={classes.mainBody}>
          <div className={classes.info}>
            <div className={classes.nameCompany}>MeGaHub</div>
            <div className={classes.description}>
              is the first blockchain CRM system and the key <br /> solution to
              the business success
            </div>
            <div className={classes.btnGetDemo} onClick={handleOpenModal}>
              Get a Demo
            </div>
          </div>

          <div className={classes.iconMain}>
            <MainImage />
          </div>
        </div>
      </div>
    </div>
  );
};
