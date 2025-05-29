import React, {  useContext, useEffect, useState } from 'react';
import FetCard from './FetCard';
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';



const FeturesGardeners = () => {
     const [gardeners, setGardeners] = useState([]);
    // const fetGardeners=use(fetPromise);
    const {user}=useContext(AuthContext);
     useEffect(() => {
        fetch("https://green-thumb-server-delta.vercel.app/gardeners/featured")
            .then(res => res.json())
            .then(data => {
                const filteredGardeners = data.filter(gar => gar.email !== user?.email);
                setGardeners(filteredGardeners);
            })
            
    }, [user]);
  

 


    return (
       
            <div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className='w-11/12 mx-auto mt-30'>
           <div className='flex md:flex-row flex-col justify-between space-y-3 items-center'> <h1 className='text-3xl font-bold '>Featured Gardeners</h1>
           <Link to="/gardeners"><button className='btn btn-outline border-primary hover:text-white'>View All <FaArrowRight /></button></Link>
           </div>
            
            <div className='grid grid-cols-1  md:grid-cols-3 gap-5 mt-6'>
                {
                    gardeners.map(fetGarden=><FetCard key={fetGarden.email} fetGarden={fetGarden}></FetCard>)
                }
            </div>
        </div>
        
    );
};

export default FeturesGardeners;