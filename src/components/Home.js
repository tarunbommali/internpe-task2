import React, { useState, useEffect } from 'react';
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { MdFilterListAlt } from "react-icons/md";
import ProductItem from './ProductItem';
import Shimmer from './Shimmer';
import Carousel from './Carousel';
import { carouselList } from '../utils/constants';

export default function Home() {
  const [initialProductList, setInitialProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortByPrice, setSortByPrice] = useState(null); // null: no sorting, 'asc': low to high, 'desc': high to low
  const [loading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setInitialProductList(data);
        setFilteredProductList(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Apply sorting when sortByPrice changes
    if (sortByPrice === 'asc') {
      setFilteredProductList([...filteredProductList].sort((a, b) => a.price - b.price));
    } else if (sortByPrice === 'desc') {
      setFilteredProductList([...filteredProductList].sort((a, b) => b.price - a.price));
    }
  }, [sortByPrice, filteredProductList]);

  
  const onHandleSearch = (searchInputText) => {
    setSearchInput(searchInputText);
    const filteredList = initialProductList.filter(
      (product) =>
        product.title?.toLowerCase().includes((searchInputText || '').toLowerCase())
    );
    setFilteredProductList(filteredList);
  };
  
  
  const resetSearch = () => {
    setSearchInput("");
    setFilteredProductList(initialProductList); // Reset filtered list to initial list
  };

  const toggleSortByPrice = () => {
    if (sortByPrice === 'asc') {
      setSortByPrice('desc');
    } else {
      setSortByPrice('asc');
    }
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

  const renderFilter = () => {
    return (
      <div className='flex items-center'>
        <button className='flex items-center' onClick={toggleSortByPrice}>
          <MdFilterListAlt/> Sort by Price {sortByPrice === 'asc' ? '(Low to High)' : (sortByPrice === 'desc' ? '(High to Low)' : '')}
        </button>
      </div>
    );
  };

  const renderProductList = () => {
    return (
      <ul className='flex flex-wrap w-[70vw] text-xl'>
        {loading ? (
          <Shimmer /> // Show shimmer effect while loading
        ) : (
          filteredProductList.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))
        )}
      </ul>
    );
  };
 

  return (
    <div className='flex flex-col'>
      <Carousel  carouselList={carouselList}/>
      <div className='flex w-[70vw] text-2xl justify-between'>
        
        {renderFilter()}
        {renderSearchInput()}
      </div>
      {renderProductList()}
    </div>
  );
}
