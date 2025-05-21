import React, { use } from 'react';
import FetCard from './FetCard';

const fetPromise=fetch("http://localhost:3000/fetGardeners").then(res=>res.json())
const FeturesGardeners = () => {
    const fetGardeners=use(fetPromise);
    console.log(fetGardeners)
   
    return (
        <div  >
            <h1 className='text-3xl font-bold '>Featured Gardeners</h1>
            
            <div className='grid grid-cols-1  md:grid-cols-3 gap-5 mt-6'>
                {
                    fetGardeners.map(fetGarden=><FetCard fetGarden={fetGarden}></FetCard>)
                }
            </div>
        </div>
    );
};

export default FeturesGardeners;