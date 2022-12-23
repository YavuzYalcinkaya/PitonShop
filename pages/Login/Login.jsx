import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-blue-900 w-full h-full"></div>

      <div className="bg-white flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start ml-4">
          <h2 className="text-3xl font-bold">Hello!</h2>
          <h1 className="mt-1">Sign Up To Get Started</h1>
        </div>

        <form className="max-w-[400px] w-full bg-white mb-4">
          <div className="flex flex-col text-gray-800 py-2">         
            <input
              className="rounded-full bg-white mt-2 p-4 border-2 focus:border-blue-500 focus:outline-none"
              type="text" placeholder="Username"
            />
          </div>
          <div className="flex flex-col text-gray-800 py-2">         
            <input
              className="rounded-full bg-white mt-2 p-4 border-2 focus:border-blue-500 focus:outline-none"
              type="text" placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col text-gray-800 py-2">         
            <input
              className="rounded-full bg-white mt-2 p-4 border-2 focus:border-blue-500 focus:outline-none"
              type="text" placeholder="Password"
            />
          </div>
          <button className='w-full my-5 py-5 bg-blue-600  hover:shadow-teal-500/40 text-white font-semibold rounded-full'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
