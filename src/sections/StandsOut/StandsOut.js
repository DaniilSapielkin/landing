import classes from "./StandsOut.module.scss";
import IconCrm from "../../assets/images/crm3.png";

export const StandsOut = () => {
  return (
    <div className={classes.root}>
      <div className={classes.infoBody}>
        <div className={classes.infoBodyWrapper}>
          <div className={classes.infoHeader}>Why MeGaHub Stands Out?</div>
          <div className={classes.infoDescription}>
            <div>
              Wide-functional and the variety of business modules, integrated
              with each other Decentralization of the business data operation
              system.
              <div>Speed and accuracy of each module’s functionality.</div>
              All of the above has been made possible with the Blockchain
              technology integration. This is an innovative solution that will
              change the CRM game upside down. Let’s take a closer look at some
              of the advantages Blockchain brings into the MeGaHub.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.background}>
        <img src={IconCrm} alt="..." />
      </div>
    </div>
  );
};
