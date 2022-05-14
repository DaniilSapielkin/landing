import Background from "../../../../assets/images/humantabBackground.png";
import classes from "./tabs.module.scss";

export const HumanResources = () => {
  return (
    <div className={classes.root}>
      <div
        className={classes.mangerBody}
        style={{ maxWidth: "450px", with: "60%" }}
      >
        <div className={classes.header}>Human Resources module</div>
        <div className={classes.subHeader}>
          MeGaHub HR module ensures the following opportunities:{" "}
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Employee, department and company active profiles
          (HRM+linkedin type blockchain solution)
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Blockchain-proven CV: genuine and confirmed experience
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Blockchain-proven Employer data: corporate HR activity
          logs, transparent terms and conditions
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Permanent HR department inner-activity logs records in
          blockchain
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Performing the functions of planning, analytics, and
          operational staff management
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Formation and development of human resources
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Management of internal corporate communications
        </div>
        <div className={classes.subHeader}>The value for business:</div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Optimized human resource allocation
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Assisting companies to begin recruitment automatically
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Maintaining a balance among vacancies and employees
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Tracking the employee reporting and progress
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Payroll management
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Sentiment and performance analysis
        </div>
      </div>

      <div className={classes.iconMain}>
        <img src={Background} alt="..." />
      </div>
    </div>
  );
};
