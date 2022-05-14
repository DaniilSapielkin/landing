import cn from "classnames";

import Background from "../../../../assets/images/warehouseBakchound.png";
import classes from "./tabs.module.scss";

export const WareHouse = () => {
  return (
    <div className={classes.root}>
      <div className={classes.mangerBody} style={{ justifyContent: "center" }}>
        <div className={classes.header}>Warehouse module</div>
        <div className="mt-1">
          Warehouse module implies a full accounting and control of the working
          inventory in the enterprise.
        </div>
        <div className={cn(classes.subHeader, "mt-2")}>
          Why is it efficient for the company?
        </div>
        <div className={classes.titleText}>
          {" "}
          <span> ◆</span> Reduce warehouse management costs{" "}
        </div>
        <div className={classes.titleText}>
          {" "}
          <span> ◆</span> Enhanced customer service
        </div>
        <div className={classes.titleText}>
          {" "}
          <span> ◆</span> Increased accuracy and productivity
        </div>
        <div className={classes.titleText}>
          {" "}
          <span> ◆</span> Higher business flexibility and scalability
        </div>
        <div className={classes.titleText}>
          {" "}
          <span> ◆</span> Boosted transparency
        </div>
      </div>

      <div className={classes.iconMain}>
        <img src={Background} alt="..." />
      </div>
    </div>
  );
};
