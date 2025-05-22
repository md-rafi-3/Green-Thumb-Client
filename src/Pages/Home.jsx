import React from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import FeturesGardeners from '../Components/FeturesGardeners';
import Tranding from '../Components/Tranding';
import Guide from '../Components/Guide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main >
                 <FeturesGardeners></FeturesGardeners>
                 <Tranding></Tranding>
                 <Guide></Guide>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;