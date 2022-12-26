import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsFillLockFill } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getSampleData } from "../../store/actions/sampleActions";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";

const Register = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;
  //assignment-api.piton.com.tr/api/v1/product/all
  https: useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      // validateOnChange: false,
      // Validate Form

      validationSchema: Yup.object({
        name: Yup.string().required("Name is required!"),
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
        confirmPassword: Yup.string()
          .required()
          .oneOf([Yup.ref("password"), null], "Password must match"),
      }),

      // Submit Form
      onsubmit: (values) => {
        console.log(values);
      },
    });
  console.log(values);

  const register = () => {
    axios
      .post(" https://assignment-api.piton.com.tr/api/v1/user/register", {
        name: values.name,
        password: values.password,
        email: values.email,
      })
      .then(function (response) {
        console.log(
          "tokennn",
          response.data.token,
          "statusss",
          response.status
        );

        if (response.status == 200 && typeof window !== "undefined") {
          alert("Kayıt Başarılı");
          window.localStorage.setItem("token", response.data.token);
           router.push("/products");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

 

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 h-screen w-full">
      {/* <div>
        {JSON.stringify(sample)}
      </div> */}
      <div className="bg-gradient-to-t from-blue-900 via-blue-800 to-blue-500 w-full h-full">
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
          <h1 className="mt-1 font-semibold">Sign Up To Get Started</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full bg-white mb-4"
        >
          <div className=" text-gray-800 py-2 ">
            <div>
              <input
                className="rounded-full w-full h-16 pl-10 bg-white mt-2 border-2 focus:border-blue-500 focus:outline-none"
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FaUser className="relative -top-10 left-4 " />
              {errors.name && touched.name ? (
                <p className="text-red-500 ml-10">{errors.name}</p>
              ) : null}
            </div>
          </div>
          <div>
            <input
              className="rounded-full w-full h-16 pl-10 bg-white mt-2 border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
            />
            <CiMail className=" text-xl relative -top-10 left-4" />
            {errors.email && touched.email ? (
              <p className="text-red-500 ml-10">{errors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col text-gray-800 py-2">
            <input
              className="rounded-full h-16 pl-10 bg-white mt-2  border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <BsFillLockFill className=" text-xl relative -top-10 left-4" />
            {errors.password && touched.password ? (
              <p className="text-red-500 ml-10">{errors.password}</p>
            ) : null}
          </div>
          <div className="flex flex-col text-gray-800 py-2">
            <input
              className="rounded-full h-16 pl-10 bg-white mt-2  border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="text-red-500 ml-10">{errors.confirmPassword}</p>
            ) : null}
          </div>
          <button
            type="submit"
            onClick={() => register()}
            className="w-full my-5 py-5 bg-blue-700  hover:bg-blue-600 text-white font-semibold rounded-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};


export default Register;
