import { CiHeart } from "react-icons/ci";

const productDetail = ({ products }) => {
  console.log(products)
  return (
    <>
      <navbar className="w-full flex justify-between items-center h-20 top-0 fixed left-0 bg-slate-200">
        <div>
          <button className="bg-blue-500 font-bold text-white px-5 py-2 rounded-full ml-8 hover:bg-[#87acec]">
            PitonShop
          </button>
        </div>

        <div>
          <button className="bg-slate-50 font-bold text-black px-6 py-2 rounded-full mr-8">
            Logout
          </button>
        </div>
      </navbar>

      <div className="flex justify-center items-center mt-40 ">
      
        <div className="flex flex-row items-center border-2 rounded-lg w-3/4 mx-auto h-96 overflow-hidden">
          <div className="">
            <div className="flex flex-row items-center absolute top-48 right-60">
              <h1>9 likes</h1>
              <CiHeart className="ml-2 text-2xl" />
            </div>
          </div>
          <div className="border-2 rounded-md ml-10 w-60 h-60">image</div>
          <div className="flex flex-1 flex-col mt-10">
            <h4 className="font-bold flex mb-3 ml-16">{products.product.name}</h4>
            <p className="ml-16 w-3/4">{products.product.description}</p>
            <div className="flex justify-end -z-50">
              <button className=" text-2xl relative bg-blue-600 font-bold text-white px-12 -right-4  py-2 rounded-full">
                {products.product.price}.00 $
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://assignment-api.piton.com.tr/api/v1/product/get/${context.params.id}`,
    {
      headers: {
        "access-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW50cnlAZ21haWwuY29tIiwiaWF0IjoxNjcyMDU5NDY0LCJleHAiOjE2OTc5Nzk0NjR9.3_lb2kYIgQpZMdKT3uwcrqrioxXwJ8tYZAqHpUz1B-8`,
      },
    }
    
  );

  const products = await res.json();
  

  return {
    props: {
      products,
    }
  }
}



export default productDetail;