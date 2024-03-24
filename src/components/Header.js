import React from 'react'
import { Link } from 'react-router-dom/dist'
import { useCart } from '../context/cartContext';

export default function Header() {
  const { cart } = useCart();

  return (
    <div className='flex justify-between px-5 py-3 text-3xl font-bold shadow-lg'>
        <h1 className='ml-2 text-md font-bold text-[#212b35]'><Link to="/">IntrenPe Kart</Link></h1>
        <ul className='flex items-center'>
            <li className='ml-5 text-lg font-semibold'>
              <Link to='/'>Home</Link></li>
            <li className='ml-5 text-lg font-semibold'>
              <Link to="cart" ><span className='bg-black text-white p-1 px-2 mr-1 rounded-md'>{cart.length}</span>Cart</Link></li>
            <li className='ml-5 text-lg font-semibold'>
              <Link to='/about'>About</Link></li>
        </ul>
    </div>
  )
}
