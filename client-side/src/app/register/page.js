
"use client";

import Link from "next/link";
import Layout from "../layout";
import { useFormik } from "formik";
import SignupSchema from "./SignupSchema";

const SignupPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("Submitted values:", values);
    },
  });

  return (
    <Layout>
      <main>
        <div className="p-4 text-2xl"></div>

        <div className="flex min-h-screen flex-col items-center justify-between p-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="container mx-auto max-w-md p-4">
              <h1 className="text-2xl font-bold mb-2">Register</h1>
              <p className="mb-4">
                Please fill in this form to create an account.
              </p>
              <hr className="mb-4" />

              <label htmlFor="fullName" className="block mb-1">
                <b>Full Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="fullName"
                id="fullName"
                className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                required
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500 mb-4">
                  {formik.errors.fullName}
                </div>
              ) : null}

              <label htmlFor="email" className="block mb-1">
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
                className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 mb-4">{formik.errors.email}</div>
              ) : null}

              <label htmlFor="password" className="block mb-1">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 mb-4">
                  {formik.errors.password}
                </div>
              ) : null}

              <label htmlFor="repeatPassword" className="block mb-1">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
                id="repeatPassword"
                className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                required
              />
              {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                <div className="text-red-500 mb-4">
                  {formik.errors.repeatPassword}
                </div>
              ) : null}

              <hr className="mb-4" />

              <p className="mb-4">
                By creating an account you agree to our{" "}
                <Link href="#" className="text-blue-500">
                  Terms & Privacy
                </Link>
                .
              </p>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
              >
                Register
              </button>
            </div>

            <div className="container mx-auto max-w-md p-4">
              <p className="mb-4">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500">
                  Sign in
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default SignupPage;
