import Background from "../../../../assets/images/accountModuleBackgroun.png";
import classes from "./tabs.module.scss";

export const AccountModule = () => {
  return (
    <div className={classes.root}>
      <div className={classes.mangerBody}>
        <div className={classes.header}>Accounting module</div>
        <div className={classes.subHeader}>
          The accounting module enables the capabilities listed below:
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Decentralized control over financial flows
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Client (Account) blockchain database management
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Blockchain integration with HR and PM modules: job
          roles, tasks, time tracking
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> In-app fast and secure financial transactions:
          salaries, bonuses, company budget transactions, shareholders
          transactions and More
        </div>

        <div className={classes.subHeader}>
          Why is it significant for business?
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Simple and secure tracking of financial processes
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Accessible financial data
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Client retention control
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Refined customer service
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> More transparency
        </div>
      </div>
      <div
        className={classes.iconMain}
        style={{ right: "-35px", maxWidth: "380px" }}
      >
        <img src={Background} alt="..." />
      </div>
    </div>
  );
};
