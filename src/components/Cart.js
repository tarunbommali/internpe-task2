import React from 'react';
import { useCart } from '../context/cartContext';

export default function Cart() {
  const { cart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2 className='flex justify-center text-center text-xl font-semibold'>Cart</h2>
      <ul className='flex flex-col items-center w-[80vw] p-5 '>
        {cart.map((item, index) => (
          <li key={index} className='flex w-[100%] justify-between shadow-md my-3 p-5 m-2'>
            <h1>{item.title} </h1> - <p> ₹ {item.price}</p>
          </li>
        ))}
      </ul>
      <p className='text-xl font-bold text-center'>
        {cart.length === 0 ? "Your cart is empty" :<p>Total Amount: ₹ {totalAmount}</p> }
      </p>
    </div>
  );
}
