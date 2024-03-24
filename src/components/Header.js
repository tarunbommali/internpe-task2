import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-2 py-3 text-3xl font-bold shadow-lg'>
        <h1 className='ml-2 text-md font-bold'>IntrenPe Kart</h1>
        <ul className='flex items-center'>
            <li className='ml-5 text-lg font-semibold'>Home</li>
            <li className='ml-5 text-lg font-semibold'>Cart</li>
            <li className='ml-5 text-lg font-semibold'>About</li>
        </ul>
    </div>
  )
}
