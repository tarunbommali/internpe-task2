import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='flex justify-center items-center flex-col w-[70%]'>
      {productDetails ? (
        <>
          <h1 className='text-sm font-semibold my-5 pb-5 '>
            <Link to="/" className="text-[#212b35]">Home</Link> / {productDetails.category}
          </h1>
          <img src={productDetails.image} alt={productDetails.title} className='w-[500px] h-[600px] rounded-md' />
          <h1>{productDetails.title}</h1>
          <p>{productDetails.description}</p>
          <p>{productDetails.price}</p>
          <p>{productDetails.rating.rate}</p>
          <p>{productDetails.category}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
