import React from 'react';

const Guide = () => {
    return (
        <div className='mt-30 border-[#3e743e20] border shadow-sm rounded-2xl py-10'>
            <h1 className='text-3xl font-bold text-center '>Seasonal Gardening Guide</h1>
            
           <div className='flex gap-5 md:flex-row flex-col w-11/12 mx-auto mt-10'>
            <img className='rounded-2xl' src="https://i.ibb.co/VWSV3JYG/istockphoto-1427666202-612x612.jpg" alt="" />
             <div className='space-y-3'>
                    <h1 className='text-2xl font-bold'>What to Plant This Season</h1>
                    <p className='text-accent'>Each season brings different opportunities for planting and garden maintenance. Stay up-to-date with our seasonal guidelines to make the most of your garden year-round.</p>

                    <ul className='list-disc pl-5 '>
                        <li>Know the best vegetables to plant each month</li>
                        <li>Learn essential maintenance tasks by season</li>
                        <li>Prepare your garden for weather changes</li>
                        <li>Discover season-specific gardening techniques</li>
                    </ul>

                    <button className='btn btn-primary '>View Seasonal Guide</button>
                </div>
           </div>
</div>
        
    );
};

export default Guide;