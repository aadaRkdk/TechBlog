// app/register/SignupSchema.js

// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .matches(
//       /[@$!%*?&#]/,
//       "Password must contain at least one special character"
//     )
//     .required("Required"),
// });

// export default SignupSchema;

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default SignupSchema;
