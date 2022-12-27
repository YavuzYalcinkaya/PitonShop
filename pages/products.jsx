import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Products = ({ products }) => {
  const router = useRouter();

  const logout = () => {
    router.push("./Auth/login");
  };

  const ımageUrl = "https://assignment-api.piton.com.tr/api/v1/product/`${item.image}`"

  console.log(products);
  return (
    <>
      <nav className="w-full flex justify-between items-center h-20 top-0 fixed left-0 bg-slate-200">
        <div>
          <button className="bg-blue-500 font-bold text-white px-5 py-2 rounded-full ml-8 hover:bg-[#87acec]">
            PitonShop
          </button>
        </div>

        <div>
          <button
            className="bg-slate-50 font-bold text-black px-6 py-2 rounded-full mr-8"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-row justify-center items-center gap-8 mt-40 ">
        {products.products.map((product, index) => (
          <div
            className="border-2  rounded-3xl h-[22rem] w-[16rem] mt-10"
            key={index}
          >
            <Link href={`/products/${product.id}`}>
              <CiHeart className=" relative text-2xl left-[12rem] top-10" />
              <div className="border rounded-lg flex justify-center h-24 items-center mt-10 mr-5 ml-5">
                <Image width={80} height={80} alt="" src={ımageUrl} />
              </div>

              <div className="mt-8 h-6 flex justify-center">
                <p className="text-sm text-center font-semibold" key={index}>
                  {product.name}
                </p>
              </div>

              <div className=" border-t-2 border-gray-300 py-2 flex justify-center text-blue-700 font-bold mt-10">
                <span key={index} className="text-[1.5rem]">
                  {product.price}.00 $
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://assignment-api.piton.com.tr/api/v1/product/all",
    {
      headers: {
        "access-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW50cnlAZ21haWwuY29tIiwiaWF0IjoxNjcyMDU5NDY0LCJleHAiOjE2OTc5Nzk0NjR9.3_lb2kYIgQpZMdKT3uwcrqrioxXwJ8tYZAqHpUz1B-8`,
      },
    }
  );
  const products = await res.json();
  console.log(products);

  return {
    props: {
      products,
    },
  };
}

export default Products;
