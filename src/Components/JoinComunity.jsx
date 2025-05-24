import React  from 'react';
import { AuthContext } from '../Context/AuthContext';

const JoinComunity = () => {
    
    return (
        <div className='bg-[#548153] text-center py-20 space-y-3 text-white '>
            <h1 className='text-3xl font-bold'>Join Our Gardening Community</h1>
            <p className='text-lg font-medium'>Connect with fellow gardeners, share your knowledge, and grow together. Create an account today to access exclusive content and features.</p>
            <div className='flex gap-5 justify-center items-center'>
                <button className='btn btn-primary'>Sign Up</button>
                <button className='btn btn-secondary'>Login</button>
            </div>
        </div>
    );
};

export default JoinComunity ;