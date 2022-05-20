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
              <div className={classes.iconEmail}>
                <IconPhone />
              </div>
              <div className={classes.numbers}>
                <div className={classes.smallIcon}>
                  <div className={classes.iconPhoneMini}>
                    <IconPhone />
                  </div>
                  <div>+380 (66) 026-28-38</div>
                </div>

                <div>+44 (20) 3807 7556</div>
              </div>
            </div>

            <div className={cn(classes.infoContact, classes.email)}>
              <div className={classes.iconEmail}>
                <IconMail />
              </div>
              <div className={classes.emailTitle}>
                <div className={classes.iconPhoneMini}>
                  <IconMail />
                </div>
                <div>info@megadevllc.com</div>
              </div>

              <div className={classes.iconSocialsMini}>
                <IconLinked className={classes.iconLinked} />
                <IconFacebook className={classes.iconFacebook} />
                <IconInstagram className={classes.iconInstagram} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.iconSocials}>
          <a href="https://linkedin.com" target="_blank">
            <IconLinked className={classes.iconLinked} />
          </a>
          <a href="https://facebook.com" target="_blank">
            <IconFacebook className={classes.iconFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <IconInstagram className={classes.iconInstagram} />
          </a>
        </div>
        <div className={classes.bntGetDemo} onClick={handleOpenModal}>
          Get a Demo
        </div>
      </div>
    </div>
  );
};
