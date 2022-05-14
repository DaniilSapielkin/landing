import { useContext } from "react";
import cn from "classnames";

import { Context } from "../../App";
import { ReactComponent as IconBackground } from "../../assets/images/mainSignUp.svg";
import classes from "./MegahubSystem.module.scss";

export const MegahubSystem = () => {
  const { handleOpenModal } = useContext(Context);

  return (
    <div className={classes.root}>
      <div className={cn("header_section", classes.header)}>
        MeGaHub CRM system
      </div>
      <div className={classes.description}>
        A top-quality CRM system from MeGaDev is ready to ensure a broad
        spectrum of benefits to companies of all sizes.
      </div>

      <div className={classes.signUpBtn} onClick={handleOpenModal}>
        Sign Up
      </div>

      <div className={classes.iconMain}>
        <IconBackground />
      </div>
    </div>
  );
};
