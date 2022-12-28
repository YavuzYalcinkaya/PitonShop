import { CiHeart } from "react-icons/ci";
import React, { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const logout = () => {
    router.push("./Auth/login");
  };
  const productsPage = () => {
    router.push("/products");
  };

  const likeProduct = (productID, productLikes) => {
    const url =
      productLikes === 0
        ? "https://assignment-api.piton.com.tr/api/v1/product/like"
        : "https://assignment-api.piton.com.tr/api/v1/product/unlike";

    axios.post(
      `${url}`,
      {
        productId: productID,
      },
      {
        headers: {
          "access-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW50cnlAZ21haWwuY29tIiwiaWF0IjoxNjcyMDU5NDY0LCJleHAiOjE2OTc5Nzk0NjR9.3_lb2kYIgQpZMdKT3uwcrqrioxXwJ8tYZAqHpUz1B-8`,
        },
      }
    );

    fetchData();
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://assignment-api.piton.com.tr/api/v1/product/all",
      {
        headers: {
          "access-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW50cnlAZ21haWwuY29tIiwiaWF0IjoxNjcyMDU5NDY0LCJleHAiOjE2OTc5Nzk0NjR9.3_lb2kYIgQpZMdKT3uwcrqrioxXwJ8tYZAqHpUz1B-8`,
        },
      }
    );
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  }

  if (isLoading) {
    return <div className="flex justify-center items-center font-bold">Yükleniyor...</div>;
  }

  return (
    <>
      <nav className="w-full flex justify-between items-center h-20 top-0 fixed left-0 bg-slate-200">
        <div>
          <button
            onClick={() => productsPage()}
            className="bg-blue-500 font-bold text-white px-5 py-2 rounded-full ml-8 hover:bg-[#87acec]"
          >
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
        {products.products.length > 0 &&
          products.products.map((product, index) => (
            <div
              className="border-2  rounded-3xl h-[28rem] w-[18rem] mt-10"
              key={index}
            >
              <span style={{ width: 60, height: 60 }}>
                {product.likes === 0 ? (
                  <CiHeart
                    className=" relative text-2xl -right-[245px] top-5 "
                    onClick={() => likeProduct(product.id, product.likes)}
                  />
                ) : (
                  <AiTwotoneHeart
                    className=" relative text-2xl -right-[245px] top-5 "
                    onClick={() => likeProduct(product.id, product.likes)}
                    color="red"
                  />
                )}
              </span>
              <Link href={`/products/${product.id}`}>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center h-24 w-40 items-center mt-10 mr-5 ml-5">
                      <Image
                        alt="product"
                        width={250}
                        height={250}
                        src={`https://assignment-api.piton.com.tr${product.image}`}
                      />
                    </div>

                    <div className="mt-20 h-12 w-52 flex justify-center">
                      <p
                        className="text-sm text-center font-semibold"
                        key={index}
                      >
                        {product.name}
                      </p>
                    </div>
                  </div>

                  <div className=" border-t-2 border-gray-300 py-2 flex justify-center text-blue-700 font-bold mt-10">
                    <span key={index} className="text-[1.5rem]">
                      {product.price}.00 $
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};


export default Products;
