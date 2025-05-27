import React from 'react';
import Navbar from '../Components/Navbar';
import errorImg from '../assets/404 Error-bro.png'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className=' justify-center flex-col flex items-center'>
                <div className=' '><img className='md:max-w-lg' src={errorImg} alt="Not Found" />
                
                
                </div>
                <Link to="/"><button className='btn btn-primary '><FaHome />Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;