import React from 'react';
import { useLoaderData } from 'react-router';
import FetCard from '../Components/FetCard';

const Gardeners = () => {
    const gardenersData=useLoaderData()
   
    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    gardenersData.map(gardeners=><FetCard fetGarden={gardeners}></FetCard>)
                }
            </div>
        </div>
    );
};

export default Gardeners;