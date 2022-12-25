import React,{useState, useEffect} from "react";
import { CiMail } from "react-icons/ci"
import { BsFillLockFill } from "react-icons/bs"

const Login = () => {
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")

  const removeToken = () => {
    if(typeof window !== 'undefined') {
      window.localStorage.removeItem('token')
    }
  }

  useEffect(() => {
 console.log(email, password)
  }, );

   
  const loginHandler = () => {
    axios.post(' https://assignment-api.piton.com.tr/api/v1/user/login', {
      password:  password,
      email:  email
    })
    .then(function (response) {
      console.log("respp", response)
      // console.log("tokennn",response.data.token, "statusss", response.status);

      // if(response.status == 200 && typeof window !== 'undefined') {
      //   alert("Giriş Başarılı")
      //   window.localStorage.setItem("token", response.data.token)
      // router.push('/pages/products')
      // } else {
      //   alert("yanlış şifre ya da email girdiniz")
      // }
  
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
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

        <form className="max-w-[400px] w-full bg-white">
          {/* <div className=" text-gray-800 py-2 ">
            <div>            
                <input
                  className="rounded-full w-full h-16 pl-10 bg-white mt-2 border-2 focus:border-blue-500 focus:outline-none "
                  type="text"
                  placeholder="Username"
                />               
              <FaUser className="relative -top-10 left-4"/>             
            </div>
          </div> */}
          <div className="mt-10">
            <input
              className="rounded-full w-full h-16 pl-10 bg-white border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
            <CiMail className=" text-xl relative -top-10 left-4"/>
          </div>
          <div className="flex flex-col text-gray-800 py-2">
            <input
              className="rounded-full h-16 pl-10 bg-white border-2 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />
            <BsFillLockFill className=" text-xl relative -top-10 left-4"/>
          </div>
          <button className="mt-2 w-full my-5 py-5 bg-blue-700  hover:bg-blue-600 text-white font-semibold rounded-full">
            Login
          </button>
          <h1 className="flex justify-center">Forgot Password</h1>
          <div onClick={() => removeToken()}>
            removetoken
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
