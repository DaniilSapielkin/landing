import Background from "../../../../assets/images/blockchainBackground.png";
import classes from "./tabs.module.scss";

export const BlockChain = () => {
  return (
    <div className={classes.root}>
      <div className={classes.mangerBody} style={{ justifyContent: "center" }}>
        <div className={classes.header}>
          Blockchain decentralized core for each CRM module
        </div>
        <div className="mt-1">
          innovative functionality, highest operations speed and advanced data
          safety
        </div>
      </div>

      <div className={classes.iconMain}>
        <img src={Background} alt="..." />
      </div>
    </div>
  );
};
