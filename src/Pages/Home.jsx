import React, { useContext } from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import FeturesGardeners from '../Components/FeturesGardeners';
import Tranding from '../Components/Tranding';
import Guide from '../Components/Guide';
import JoinComunity from '../Components/JoinComunity';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <main >
                 <FeturesGardeners></FeturesGardeners>
                 <Tranding></Tranding>
                 <Guide></Guide>
                 {!user&&<JoinComunity></JoinComunity>}
            </main>
            
        </div>
    );
};

export default Home;