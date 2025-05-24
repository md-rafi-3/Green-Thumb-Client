import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaRegEdit, FaRegUser, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AuthContext } from '../Context/AuthContext';



const Footer = () => {
  const {user}=useContext(AuthContext);
 const links=<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
     <li><NavLink to="/browseTips">Browse Tips </NavLink></li>
    
  
     </>


const socialLinks = (
    <>
      <a target="#" href="https://www.facebook.com/rafi.rupo">
        <FaFacebook size={28} color="#1877f2" />
      </a>
      <a target="#" href="https://www.twitter.com">
        <FaSquareXTwitter size={28} color="black" />
      </a>
      <a target="#" href="https://www.linkedin.com">
        <FaLinkedin size={28} color="#0077B5" />
      </a>
      <a target="#" href="https://www.youtube.com">
        <FaYoutube size={28} color="#FF0000" />
      </a>
    </>
  );

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-base-content p-10">
  <aside>

    <p className=" text-4xl text-secondary font-bold">
      Green<span className='text-primary'>Thumb</span>
   
      
    </p>
    <p className='text-accent '>
     Growing community through shared gardening <br /> knowledge and experiences.
    </p>
     <nav className='space-y-3 text-accent'>
        <p className='text-lg'>Follow Us</p>
        <div className="grid grid-flow-col grayscale-60 gap-4">{socialLinks}</div>
      </nav>
  </aside>

  <ul className='text-accent'>
    <li className="footer-title">Quick Links</li>
   {links}
   {user&&<> <li><NavLink to="/shareTips">Share a Tips </NavLink></li>
     <li><NavLink to="/myTips">My Tips </NavLink></li></>}
  </ul>
  <nav className='text-accent'> 
    <h6 className="footer-title">Legal</h6>
    <a   className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>


</footer>
  );
};

export default Footer;