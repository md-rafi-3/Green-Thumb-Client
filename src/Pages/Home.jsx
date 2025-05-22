import React from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import FeturesGardeners from '../Components/FeturesGardeners';
import Tranding from '../Components/Tranding';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main className=' *:mt-32'>
                 <FeturesGardeners></FeturesGardeners>
                 <Tranding></Tranding>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;