import React from "react";
import { VscMail } from "react-icons/vsc";
import { BsFillLockFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const removeToken = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
    }
  };

  const loginHandler = () => {
    axios
      .post(" https://assignment-api.piton.com.tr/api/v1/user/login", {
        password: values.password,
        email: values.email,
      })
      .then(function (response) {
        console.log("respp", response);
        console.log(
          "tokennn",
          response.data.token,
          "statusss",
          response.status
        );

        if (response.status == 200 && typeof window !== "undefined") {
          // alert("Giriş Başarılı");
          window.localStorage.setItem("token", response.data.token);
          router.push("/products");
        } else {
          alert("yanlış şifre ya da email girdiniz");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      // Validate Form

      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required!"),
        password: Yup.string()
          .required("Password is required!")
          .min(6, "Must be 6 characters or more")
          .max(20, "Must be 20 characters or more")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
            "One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
      }),

      // Submit Form
      onsubmit: (values) => {
        console.log(values);
      },
    });
  console.log(values);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 h-screen w-full">
      <div className="bg-gradient-to-t from-blue-900 via-blue-600 to-blue-400 w-full h-full">
        <div className="flex flex-col items-center mt-80 mr-60">
          <h3 className="text-white text-4xl font-bold">PitonShop</h3>
          <h2 className="font-semibold text-white ml-20 mt-2">
            The most popular book shop for IT
          </h2>
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center items-start ml-40">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Hello!</h2>
          <h1 className="mt-1 font-semibold">Welcome Back</h1>
        </div>

        <form onSubmit={handleSubmit} className="max-w-[400px] w-full bg-white">
          <div className="mt-10">
            <input
              className="rounded-full w-full h-16 pl-10 bg-white border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <VscMail className=" text-xl relative -top-10 left-4" color="lightgray" />
            {errors.email && touched.email ? (
              <p className="text-red-500 ml-10">{errors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col text-gray-800 py-2">
            <input
              className="rounded-full h-16 pl-10 bg-white border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <BsFillLockFill className=" text-xl relative -top-10 left-4" color="lightgray" />
            {errors.password && touched.password ? (
              <p className="text-red-500 ml-10">{errors.password}</p>
            ) : null}
          </div>
          <button
            onClick={() => loginHandler()}
            className="mt-2 w-full my-5 py-5 bg-blue-700  hover:bg-blue-600 text-white font-semibold rounded-full"
          >
            Login
          </button>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <div onClick={() => removeToken()}>removetoken</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
