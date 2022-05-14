import Background from "../../../../assets/images/managerTab.png";
import classes from "./tabs.module.scss";

export const ProjectManager = () => {
  return (
    <div className={classes.root}>
      <div className={classes.mangerBody}>
        <div className={classes.header}>Project Management module</div>
        <div className={classes.subHeader}>
          The PM module ensures the functionalityhelpful in:
        </div>

        <div className={classes.titleText}>
          <span>◆</span> Safe and efficient project stats data store,
          blockchain-based data storage
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> User-friendly data visualization for Project Management
          team
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Secure, fast and handy communications on specific
          projects
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Keeping the unchangeable decentralized track of time,
          assigned and completed tasks, and their progress
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Frequency and average feedback time from team members
        </div>

        <div className={classes.subHeader}>
          Why is it profitable for business?
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Consolidation of enterprise processes
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Cross-department alignment
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Optimized project accomplishing
        </div>

        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Simplified progress observation
        </div>
        <div className={classes.titleText}>
          {" "}
          <span>◆</span> Cohesive and enriching employees experiences
        </div>
      </div>

      <div className={classes.iconMain}>
        <img src={Background} alt="..." />
      </div>
    </div>
  );
};
