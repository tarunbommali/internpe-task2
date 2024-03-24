import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { STAR_RATING_URL } from "../utils/constants";

export default function ProductItemDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  // const { addToCart } = useCart() || {};

  // const handleAddToCart = () => {
  //   addToCart(item);
  // };

  const renderProductDetails = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-3">
          <h1 className="font-semibold text-xl text-[#1f1f1f]">
            {productDetails.title}
          </h1>
          <div className="flex items-center">
            <img
              src={STAR_RATING_URL}
              className="w-[18px] h-[18px] mr-2"
              alt="rating"
            />
            {productDetails.rating.rate}
          </div>
        </div>
        <p>{productDetails.description}</p>
        <p className="text-xl font-bold text-[#54aeff] py-3">
          Rs. {productDetails.price}
        </p>

        <button className="flex text-center w-[400px] justify-center py-1 items-center bg-yellow-400 rounded-md">
          Add to Cart
        </button>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center flex-col w-[70%]">
      {productDetails ? (
        <>
          <h1 className="text-sm font-semibold my-5 pb-5 ">
            <Link to="/" className="text-[#212b35]">
              Home
            </Link>{" "}
            / {productDetails.category}
          </h1>
          <div className="flex h-[250px] p-3 items-center shadow-md rounded-md">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-[180px] h-[210px] mr-2 rounded-md"
            />
            {renderProductDetails()}
          </div>
        </>
      ) : (
        <div className="flex h-[250px] w-[100%] p-3 items-center shadow-md rounded-md"></div>
      )}
    </div>
  );
}
