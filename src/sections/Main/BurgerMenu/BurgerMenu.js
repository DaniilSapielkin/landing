import { useContext } from "react";
import { Context } from "../../../App";

import { ReactComponent as IconBurger } from "../../../assets/icons/iconBurger.svg";
import { ReactComponent as IconEmail } from "../../../assets/icons/mail.svg";
import { ReactComponent as IconPhone } from "../../../assets/icons/phone.svg";
import classes from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const { handleOpenModal } = useContext(Context);

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.iconMain}>
          <IconBurger />
        </div>

        <div className={classes.itemInfo}>
          <div>
            <IconEmail />
          </div>
          +380 (66) 026-28-38
        </div>
        <div className={classes.itemInfo}>+44 (20) 3807 7556</div>

        <div className={classes.itemInfo}>
          <div>
            <IconPhone />
          </div>
          info@megadevllc.com
        </div>

        <div className={classes.itemInfoBtn}>
          <div className={classes.btn} onClick={handleOpenModal}>
            More about as
          </div>
        </div>
      </div>
    </div>
  );
};
