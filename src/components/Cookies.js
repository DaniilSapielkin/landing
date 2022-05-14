import classes from "./Cookies.module.scss";

export const Cookies = () => {
  return (
    <div className={classes.root}>
      <div className={classes.description}>
        Our site uses cookies to personalize content and analyze our traffic.
        Please see our Privacy Policy and Cookie Policy to learn more about how
        we process your personal data. By clicking “Submit”, you agree to these
        terms.
      </div>

      <div className={classes.bntAccept}>Accept</div>
    </div>
  );
};
