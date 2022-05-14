import { useContext } from "react";
import cn from "classnames";

import { Context } from "../../App";
import { ReactComponent as IconMain } from "../../assets/icons/bottomIcon.svg";
import { ReactComponent as IconMail } from "../../assets/icons/mail.svg";
import { ReactComponent as IconPhone } from "../../assets/icons/phone.svg";
import { ReactComponent as IconLinked } from "../../assets/icons/linkedin.svg";
import { ReactComponent as IconFacebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../../assets/icons/instagram.svg";

import classes from "./Bottom.module.scss";

export const Bottom = () => {
  const { handleOpenModal } = useContext(Context);

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.IconMain}>
          <IconMain />
        </div>

        <div className={classes.contacts}>
          <div className={classes.infoBottom}>
            <div className={classes.infoContact}>
              <IconPhone />
              <div className={classes.numbers}>
                <div> +380 (66) 026-28-38</div>
                <div>+44 (20) 3807 7556</div>
              </div>
            </div>
            <div className={cn(classes.infoContact, classes.email)}>
              <IconMail />
              <div className={classes.emailTitle}>info@megadevllc.com</div>
            </div>
          </div>
        </div>

        <div className={classes.iconSocials}>
          <IconLinked className={classes.iconLinked} />
          <IconFacebook className={classes.iconFacebook} />
          <IconInstagram className={classes.iconInstagram} />
        </div>
        <div className={classes.bntGetDemo} onClick={handleOpenModal}>
          Get a Demo
        </div>
      </div>
    </div>
  );
};
