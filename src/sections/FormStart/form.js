import { useState } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import cn from "classnames";

import "./form.scss";
import classes from "./FormStart.module.scss";

export default function FormField() {
  const [checkBox, setCheckBox] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),

    checkbox: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      promocode: "",
      phone: "",
      checkbox: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const errorName = formik.touched.name && Boolean(formik.errors.name);
  const errorEmail = formik.touched.email && Boolean(formik.errors.email);
  const errorCheckBox =
    formik.touched.checkbox && Boolean(formik.errors.checkbox);
  const errorPhone = formik.touched.phone && Boolean(formik.errors.phone);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={cn(classes.inputBox, { [classes.inputError]: errorName })}
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name*"
          value={values.name}
          onChange={handleChange}
        />
        {errorName && <div className={classes.error}>{errors.name}</div>}
      </div>

      <div
        className={cn(classes.inputBox, { [classes.inputError]: errorEmail })}
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {errorName && <div className={classes.error}>{errors.email}</div>}
      </div>

      <div className={cn(classes.inputBox, classes.inputPhone)}>
        {/* <div className={classes.inputBackground} /> */}

        <PhoneInput
          id="phone"
          name="phone"
          country={"us"}
          placeholder="Phone number*"
          // onChange={handleChange}
          onChange={(phone) => formik.handleChange(phone)}
        />
      </div>

      <div className={classes.inputBox}>
        <input
          id="promocode"
          name="promocode"
          type="text"
          placeholder="Promo code"
          checked={values.promocode}
          onChange={handleChange}
        />
      </div>

      <div className={classes.consent}>
        <div className={classes.checkbox}>
          <label
            className={cn(classes.customCheckbox, {
              [classes.errorCheckBox]: errorCheckBox,
            })}
          >
            <input
              type="checkbox"
              name="checkbox"
              checked={values.checkbox}
              onChange={handleChange}
            />
            <span />
          </label>
        </div>

        <div className={classes.consentInfo}>
          I consent to the processing and use of my personal data in accordance
          with the <a href="#">Privacy Policy</a> and accept{" "}
          <a href="#">Terms of Service</a>
        </div>
      </div>
      <button type="submit" className={classes.btnStart}>
        Get a Demo
      </button>
    </form>
  );
}
