import { ReactComponent as IconBackground } from "../../assets/images/backgroundStartForm.svg";
import FormField from "./form";
import classes from "./FormStart.module.scss";

export const FormStart = () => {
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.header}>Get started with MeGaHub</div>
        <FormField />

        <div className={classes.iconMain}>
          <IconBackground />
        </div>
      </div>
    </div>
  );
};
