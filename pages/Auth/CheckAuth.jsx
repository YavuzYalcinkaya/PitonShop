import React, {useEffect, useState}  from "react";
import Login from "./login";
import Register from "./register";


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
