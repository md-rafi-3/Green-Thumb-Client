import React, { use } from 'react';
import TipsCard from './TipsCard';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const tipsPromise=fetch("http://localhost:3000/tips/tranding").then(res=>res.json())
const Tranding = () => {
   const tipsData=use(tipsPromise);
    return (
        <div id='trandingTips' className='bg-neutral py-10 mt-30 rounded-2xl'>
            <div className='flex justify-between md:flex-row flex-col space-y-3 py-10 w-11/12 mx-auto items-center'> <h1 className='text-3xl font-bold '>Trending Garden Tips</h1>
                      <Link to="/browseTips"> <button className='btn btn-outline border-primary hover:text-white'>View All <FaArrowRight /></button></Link>
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