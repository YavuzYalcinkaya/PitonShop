import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Products = () => {
  // const url = "https://assignment-api.piton.com.tr/api/v1/product/all";
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         url
  //       );
  //       setProducts(response.data);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <navbar className="w-full flex justify-between items-center h-20 top-0 fixed left-0 bg-slate-200">
        <div>
          <button className="bg-blue-500 font-bold text-white px-5 py-2 rounded-full ml-8 hover:bg-[#87acec]">
            PitonShop
          </button>
        </div>

        <div>
          <button className="bg-slate-50 font-bold text-black px-5 py-2 rounded-full mr-8">
            Logout
          </button>
        </div>
      </navbar>

      <div className="flex flex-row justify-center items-center mt-40 ">
         
        <div className="border rounded-lg h-[22rem] w-56 mt-10">
           <CiHeart className=" relative left-[12rem] top-10"/>
           <div className="border rounded-lg flex justify-center h-24 items-center mt-10 mr-5 ml-5">
            image
           </div>
           <div className="font-bold mt-8 flex justify-center">name</div>
           <hr className="mt-10" />
           <div className="flex justify-center text-blue-700 font-bold mt-10">35 $</div>
        </div>
      </div>
    </>
  );
};

export default Products;
