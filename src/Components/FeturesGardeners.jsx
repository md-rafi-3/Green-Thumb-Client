import React, { use } from 'react';
import FetCard from './FetCard';
import { FaArrowRight } from 'react-icons/fa';

const fetPromise=fetch("http://localhost:3000/gardeners/featured").then(res=>res.json())
const FeturesGardeners = () => {
    const fetGardeners=use(fetPromise);
    console.log(fetGardeners)
   
    return (
        <div className='w-11/12 mx-auto mt-30'>
           <div className='flex justify-between items-center'> <h1 className='text-3xl font-bold '>Featured Gardeners</h1>
           <button className='btn btn-outline border-primary hover:text-white'>View All <FaArrowRight /></button>
           </div>
            
            <div className='grid grid-cols-1  md:grid-cols-3 gap-5 mt-6'>
                {
                    fetGardeners.map(fetGarden=><FetCard fetGarden={fetGarden}></FetCard>)
                }
            </div>
        </div>
    );
};

export default FeturesGardeners;