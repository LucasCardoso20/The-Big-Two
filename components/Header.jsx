import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import logo from '../public/logo.png'
import Image from 'next/image'

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container flex mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white-400 py-8">
        <div className="md:float-left block img-container">
          <Link href="/">
            <Image src={logo} className='logo sm:flex justify-center'/>
          </Link>
        </div>

        <nav className='nav'>
          <div className="hidden md:float-left md:contents">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
            ))}
          </div>
        </nav>
      </div>
     
    </div>
  );
};

export default Header;
