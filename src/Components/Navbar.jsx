import React from 'react';
import { FaRegEdit, FaRegUser } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { LuUsersRound } from 'react-icons/lu';
import { MdLogin, MdOutlineHome } from 'react-icons/md';
import { NavLink } from 'react-router';
import DarkMode from './DarkMode';

const Navbar = () => {
    const links=<>
    <li><NavLink to="/"><MdOutlineHome />Home</NavLink></li>
    <li><NavLink to="/gardeners"><LuUsersRound />Explore Gardeners</NavLink></li>
    <li><NavLink to="/browseTips"><IoSearchOutline />Browse Tips </NavLink></li>
    <li><NavLink to="/shareTips"><FaRegEdit />Share a Tips </NavLink></li>
    <li><NavLink to="/myTips"><FaRegUser />My Tips </NavLink></li>
 
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     <div tabIndex={0}
        className="menu  items-start menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <ul className='*:hover:bg-secondary'>
        {links}
        <li><button className='flex rounded-lg items-center gap-2 '><span><MdLogin></MdLogin></span>Login / Sign Up</button></li>
      </ul>
      
     </div>
      
    </div>
    <h1 className=" text-xl text-secondary font-bold">Green<span className='text-base-200'>Thumb</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-base menu-horizontal px-1 *:ml-4">
     {links}
    </ul>
  </div>
  <div className="navbar-end md:gap-3 items-center ">
    <DarkMode></DarkMode>
    <button className='hidden md:flex px-2 py-1 rounded-lg items-center gap-2  btn-ghost hover:bg-secondary '><span><MdLogin></MdLogin></span>Login</button>
  </div>
</div>
    );
};

export default Navbar;