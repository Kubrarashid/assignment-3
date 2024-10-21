
import React from "react";

const Header =() => {
  return (
    <header className='bg-slate-950 text-orange-200 p-5 shadow-md sticky top-0 z-50'>
      <nav className='container mx-auto flex justify-between items-center'>
        <h2 className="text-5xl font-bold"> <b>Welcome to My World</b></h2>
        <ul className="flex space-x-5">
          <li>
            <a href='#home' className='text-lg text-orange-200 hover:text-teal-300'>Home</a>
          </li>
          <li>
            <a href='#about' className='text-lg text-orange-200 hover:text-teal-300'>About</a>
          </li>
          <li>
            <a href="#portfolio" className='text-lg text-orange-200 hover:text-teal-300'>Portfolio</a>
          </li>

          <li>
            <a href="#contact" className='text-lg text-orange-200 hover:text-teal-300'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;