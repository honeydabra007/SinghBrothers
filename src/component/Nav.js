import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Nav = ({ setResults }) => {
  const [isClick, setIsClick] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [input, setInput] = useState("");

  const toggleClick = () => {
    setIsClick(!isClick);
    setIsServicesOpen(false); // Hide services dropdown when mobile menu toggles
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='relative'>
      <div className='flex w-[360px] md:w-auto justify-around p-0 md:p-4 mt-4 md:mt-0 shadow-sm'>
        <div>
          <Link to='/'>
            <img
              className="h-[70px] w-[150px] md:w-32 rounded-[100px]"
              src={`${process.env.PUBLIC_URL}/SB-logo-9 (1).png`}
              alt="SB Logo"
            />
          </Link>
        </div>
        <div
          className={`absolute z-50 top-full left-0 p-6 bg-white w-full text-xl font-semibold text-blue-500 ${isClick ? 'block' : 'hidden'} md:flex md:relative md:top-4 md:left-0 md:w-auto md:bg-none md:p-0`}
          id="navbar-cta"
        >
          <Link to="/" onClick={toggleClick}>
            <p className="border-none md:hover:border-y-2 md:hover:border-t-0 md:hover:border-b-blue-400 h-[70px] block py-2 md:py-0 md:px-4">
              Home
            </p>
          </Link>
          <Link to="/about" onClick={toggleClick}>
            <p className="block border-none md:hover:border-y-2 md:hover:border-t-0 md:hover:border-b-blue-400 h-[70px] py-2 md:py-0 md:px-4">
              About Us
            </p>
          </Link>
          <Link to="/do" onClick={toggleClick}>
            <p className="block border-none md:hover:border-y-2 md:hover:border-t-0 md:hover:border-b-blue-400 h-[70px] py-2 md:py-0 md:px-4">
              What We Do
            </p>
          </Link>
          <div className='group'>
            <button className='flex items-center gap-2' onClick={toggleServices}>
              Services <BsChevronDown className={`${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute z-10 top-68 md:top-10 w-[400px] rounded-md ${isServicesOpen ? 'block' : 'hidden'} bg-white p-6`}>
              <Link to="/edu" onClick={toggleClick}><p className='mt-3'>Education Services</p></Link>
              <Link to="/real" onClick={toggleClick}><p className='mt-3'>Real Estate and Property Law</p></Link>
              <Link to="/gov" onClick={toggleClick}><p className='mt-3'>Government Corporate</p></Link>
              <Link to="/bank" onClick={toggleClick}><p className='mt-3'>Banking & Finance</p></Link>
              <Link to="/law" onClick={toggleClick}><p className='mt-3'>Healthcare Law and Regulatory Compliance</p></Link>
            </div>
          </div>
        </div>
        <div className='flex w-[380px] items-center mr-2 md:mr-0 gap-2 md:p-3 relative'>
          <div className='flex gap-4'>
            <div className="input-wrapper flex items-center border-b border-gray-300">
              <CiSearch id="search-icon" className="mr-2" />
              <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                className="focus:outline-none"
              />
            </div>
            <Link to="/Contact">
              <button className='bg-blue-600 h-10 w-20 md:w-auto text-white p-0 md:p-2 transition-all duration-200 ease-in-out hover:scale-[1.1] hover:shadow-lg hover:shadow-blue-600 rounded-[4px]'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <button
          onClick={toggleClick}
          type="button"
          className="inline-flex items-center p-2 mt-4 mr-2 w-12 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded={isClick ? 'true' : 'false'}
        >
          <span className="sr-only relative">Toggle Main Menu</span>
          {isClick ? (
            <RxCross1 className="block absolute right-4 top-6 md:hidden w-5 h-5" aria-hidden="true" />
          ) : (
            <RxHamburgerMenu className="block absolute right-4 top-6 md:hidden w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Nav;
