import React from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import FeturesGardeners from '../Components/FeturesGardeners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main className='w-11/12 mx-auto *:mt-32'>
                 <FeturesGardeners></FeturesGardeners>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;