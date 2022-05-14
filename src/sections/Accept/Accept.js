import image from "../../assets/icons/iconPhoneAccept.png";
import { ReactComponent as IconMain } from "../../assets/images/2.2.svg";
import classes from "./Accept.module.scss";

export const Accept = () => {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.infoHeaderMini}>
          MeGaHub CRM system as the key solution <br /> to the business success
        </div>

        <div className={classes.backgroundFirst}>
          <IconMain />
        </div>

        <div className={classes.backgroundSecond}>
          <img src={image} alt="..." />
        </div>

        <div className={classes.infoBody}>
          <div className={classes.infoHeader}>
            MeGaHub CRM system as the key solution to the business success
          </div>
          <div className={classes.infoDescription}>
            <div>
              Every business strives for growing sales, increasing the internal
              processes management level, and ensuring higher customer
              satisfaction rate to succeed. The key technology to accomplish
              such goals is a CRM system.
            </div>
            <div className={classes.customText}>
              Research indicates that CRM software can increase sales by as much
              as 29% while improving sales forecasting accuracy by up to 32% and
              growing sales productivity by 39%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
