"use client";

import Link from "next/link";
import Layout from "../layout";
import LoginSchema from "./LoginSchema";
import { useFormik } from "formik";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <div className="p-4 text-2xl"></div>
      <div className="flex min-h-screen flex-col items-center justify-between p-2">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">Login</h1>
            <p className="mb-4">
              Please fill in this form to log into your account.
            </p>
            <hr className="mb-4" />

            <label htmlFor="email" className="block mb-1">
              <b>Email</b>
            </label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
              className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                formik.touched.email && formik.errors.email ? "border-red-500" : ""
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 mb-4">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password" className="block mb-1">
              <b>Password</b>
            </label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              required
              className={`w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                formik.touched.password && formik.errors.password ? "border-red-500" : ""
              }`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 mb-4">{formik.errors.password}</div>
            ) : null}

            <hr className="mb-4" />

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Login
            </button>
          </div>

          <div className="container mx-auto p-4">
            <p className="mb-4">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500">
                Register
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
