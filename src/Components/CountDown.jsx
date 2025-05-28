import React from 'react';
import { MdEvent } from 'react-icons/md';
import CountUp from 'react-countup';

const CountDown = () => {
    const eventStats = [
  {
    title: "🌱 Gardening Tips Shared",
    value: 2980,
    description: "Helpful tips and guides from our green community"
  },
  {
    title: "👨‍🌾 Total Gardeners Joined",
    value: 1347,
    description: "Passionate gardeners contributing and learning together"
  },
  {
    title: "📚 Resources Published",
    value: 125,
    description: "Tutorials, articles, and plant care guides available"
  }
];

    return (
        <div  data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className='mt-40 w-11/12 mx-auto text-center space-y-3 mb-40'>
            <h1 className='text-5xl font-bold'>
  Discover. Learn. <span className='text-primary'>Grow Together</span>
</h1>
            <p className='opacity-75'>
  From hands-on gardening workshops to inspiring community meetups — discover events that connect you with nature, fellow gardeners, and expert tips. Let’s cultivate a greener tomorrow, together.
</p>
            {/* container */}
            <div className='grid md:grid-cols-3 grid-cols-1'>
                {/* 1st */}
               {
                eventStats.map(state=>(<div key={state.value} data-aos="fade-up"
                 className='p-10 text-center space-y-2'>
                    <h1 className='text-6xl font-extrabold mt-2'><CountUp end={state.value} suffix='+' enableScrollSpy></CountUp></h1>
    
                    <p className='text-secondary font-medium'>{state.title}</p>
                    </div>))
               }
            </div>
        </div>
    );
};

export default CountDown;