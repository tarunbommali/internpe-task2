import React, { startTransition } from "react";
import { Link } from "react-router-dom";
import { STAR_RATING_URL } from "../utils/constants";
import { useCart } from "../context/cartContext";


export default function ProductItem({ item }) {
  const { id, image, price, rating, title } = item;
  const { rate, count } = rating;
  
  const { addToCart } = useCart() || {};


  const handleAddToCart = () => {
    addToCart(item);
    alert("Woohoo! 🎉 You've added this product to your cart! Time to celebrate! 🚀")
  };

  

  return (
    <li className="flex w-[258px] p-3 rounded-sm shadow-md flex-col m-1 mt-2">
      <Link to={`product/${id}`} className="hover:scale-90">
        <img className="h-[210] w-[99%] rounded-md" src={image} alt={title} />
        <p className="text-lg font-bold w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
        <p>Rs{price}</p>
        <p className="flex items-center">
          <img
            src={STAR_RATING_URL}
            alt="rating"
            className="h-[18px] w-[18px] mr-2 "
          />
          {rate}
        </p>
      </Link>
      <button onClick={handleAddToCart} className="flex text-center justify-center py-1 items-center bg-yellow-400 rounded-md hover:scale-105">
        Add to Cart
      </button>
    </li>
  );
}

