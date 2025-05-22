import React, { use } from 'react';
import TipsCard from './TipsCard';
import { FaArrowRight } from 'react-icons/fa';

const tipsPromise=fetch("http://localhost:3000/tips/tranding").then(res=>res.json())
const Tranding = () => {
   const tipsData=use(tipsPromise);
    return (
        <div className='bg-neutral py-10 mt-30 rounded-2xl'>
            <div className='flex justify-between py-10 w-11/12 mx-auto items-center'> <h1 className='text-3xl font-bold '>Trending Garden Tips</h1>
                       <button className='btn btn-outline border-primary hover:text-white'>View All <FaArrowRight /></button>
                       </div>
         
         <div className='grid md:grid-cols-3  grid-cols-1 gap-5 w-11/12 mx-auto'>
            {
                tipsData.map(tips=><TipsCard tips={tips}></TipsCard>)
            }
         </div>
            
        </div>
    );
};

export default Tranding;