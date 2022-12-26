import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/router";



const Products = ({products}) => {console.log(products)}


  // const url = "https://assignment-api.piton.com.tr/api/v1/product/all";
  // const [products, setProducts] = useState([]);
  // const router = useRouter();

  export async function getStaticProps() {
    const res = await fetch(
      'https://assignment-api.piton.com.tr/api/v1/product/all', {
        headers: {'access-token': 
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW50cnlAZ21haWwuY29tIiwiaWF0IjoxNjcyMDU5NDY0LCJleHAiOjE2OTc5Nzk0NjR9.3_lb2kYIgQpZMdKT3uwcrqrioxXwJ8tYZAqHpUz1B-8`}
      }
    );
    const products = await res.json();
    console.log(products);
   

    return {
      props: {
         products,
      },
    };
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://assignment-api.piton.com.tr/api/v1/product/all"
  //       );
  //       setProducts(response.data);
  //       console.log('data', response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const logout = () => {
  //   router.push("./Auth/login");
  // };

  // return (
  //   <>
  //     <nav className="w-full flex justify-between items-center h-20 top-0 fixed left-0 bg-slate-200">
  //       <div>
  //         <button className="bg-blue-500 font-bold text-white px-5 py-2 rounded-full ml-8 hover:bg-[#87acec]">
  //           PitonShop
  //         </button>
  //       </div>

  //       <div>
  //         <button
  //           className="bg-slate-50 font-bold text-black px-6 py-2 rounded-full mr-8"
  //           onClick={() => logout()}
  //         >
  //           Logout
  //         </button>
  //       </div>
  //     </nav>

  //     <div className="flex flex-row justify-center items-center mt-40 ">
  //       <div className="border rounded-lg h-[22rem] w-56 mt-10">
  //         <CiHeart className=" relative text-2xl left-[12rem] top-10" />
  //         <div className="border rounded-lg flex justify-center h-24 items-center mt-10 mr-5 ml-5">
  //           image
  //         </div>
  //         <div className="font-bold mt-8 flex justify-center">name</div>
  //         <div className=" border-t-2 border-gray-300 py-2 flex justify-center text-blue-700 font-bold mt-10">
  //           35 $
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  


export default Products;
