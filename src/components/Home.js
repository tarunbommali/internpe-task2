import React, { useState } from 'react';
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { productList } from '../utils/productList';

export default function Home() {
  const [initialProductList, setInitialProductList] = useState(productList);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const onHandleSearch = (searchInputText) => {
    setSearchInput(searchInputText);
    const filteredList = initialProductList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchInputText.toLowerCase())
    );
    setFilteredProductList(filteredList);
  };

  const resetSearch = () => {
    setSearchInput("");
    setFilteredProductList([]);
  };

  const renderSearchInput = () => {
    return (
      <div className="flex items-center border-[1px] rounded-md text-black  px-3 py-1 text-lg mr-5">
        <input
          type="text"
          placeholder="Search for Products"
          className="py-1 px-1 mr-2 outline-none"
          value={searchInput}
          onChange={(e) => onHandleSearch(e.target.value)}
        />
        {searchInput.length !== 0 ? (
          <button onClick={resetSearch} className="icon-button">
            <IoCloseSharp className="icon" />
          </button>
        ) : (
          <button
            onClick={() => onHandleSearch(searchInput)}
            className="icon-button"
          >
            <IoSearchOutline className="icon" />
          </button>
        )}
      </div>
    );
  };

  const renderProductList = () => {
    const listToRender = searchInput.length !== 0 ? filteredProductList : initialProductList;
    return (
      <ul className='flex flex-col w-[70vw] text-2xl justify-between'>
        {listToRender.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <div className='flex w-[70vw] text-2xl justify-between bg-slate-500'>
        {renderSearchInput()}
      </div>
      {renderProductList()}
    </div>
  )
}
