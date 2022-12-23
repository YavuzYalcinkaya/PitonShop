import React from "react";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci"
import { BsFillLockFill } from "react-icons/bs"

const Register = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 h-screen w-full">
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

        <form className="max-w-[400px] w-full bg-white mb-4">
          <div className=" text-gray-800 py-2 ">
            <div>            
                <input
                  className="rounded-full w-full h-16 pl-10 bg-white mt-2 border-2 focus:border-blue-500 focus:outline-none "
                  type="text"
                  placeholder="Username"
                />               
              <FaUser className="relative -top-10 left-4"/>             
            </div>
          </div>
          <div>
            <input
              className="rounded-full w-full h-16 pl-10 bg-white mt-2 border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="Email Address"
            />
            <CiMail className=" text-xl relative -top-10 left-4"/>
          </div>
          <div className="flex flex-col text-gray-800 py-2">
            <input
              className="rounded-full h-16 pl-10 bg-white mt-2  border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="Password"
            />
            <BsFillLockFill className=" text-xl relative -top-10 left-4"/>
          </div>
          <button className="w-full my-5 py-5 bg-blue-700  hover:bg-blue-600 text-white font-semibold rounded-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
