import React, {useEffect, useState}  from "react";
import Login from "./Login";
import Register from "./Register";


const CheckAuth = () => {
 const [isLoggedIn, setisLoggedIn] = useState(false)
 useEffect(() => {
  if( typeof window !== 'undefined') {
   if(window.localStorage.hasOwnProperty('token')) {
    setisLoggedIn(true)
   } else {
  setisLoggedIn(false)
   }
  }
 }, [isLoggedIn]);
  return (
   <>
    {isLoggedIn ?  <Login /> : <Register/> }

   </>
  );
};

export default CheckAuth;
