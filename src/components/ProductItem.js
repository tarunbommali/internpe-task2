import React, { startTransition } from "react";
import { Link } from "react-router-dom";
import { STAR_RATING_URL } from "../utils/constants";

export default function ProductItem({ item }) {
  const {  description , id , image, price, rating , title } = item;
  const {rate , count} = rating ; 
  return (
   <Link to={`product/${id}`}> <li className="flex w-[258px] p-2 rounded-sm shadow-sm flex-col bg-slate-300 my-3 mr-2">
      <img className="h-[310] w-[99%]" src={image} alt={title} />
      <p className="text-lg font-bold w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">{title}</p>
      <p>Rs{price}</p>
      <p className="flex items-center"><img src={STAR_RATING_URL} alt="rating" className="h-[18px] w-[18px] mr-2 " />{rate}</p>

    </li>
    </Link>
  );
}
