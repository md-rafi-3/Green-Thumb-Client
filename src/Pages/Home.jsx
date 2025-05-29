import React, { useContext } from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import FeturesGardeners from '../Components/FeturesGardeners';
import Tranding from '../Components/Tranding';
import Guide from '../Components/Guide';
import JoinComunity from '../Components/JoinComunity';
import { AuthContext } from '../Context/AuthContext';
import CountDown from '../Components/CountDown';
import { Helmet } from 'react-helmet';


const Home = () => {
    const {user}=useContext(AuthContext);
   

    
    return (
        <div>
           <Helmet>
                <title>Green-Thumb || Home</title>
            </Helmet>
            <Banner></Banner>
            <main >
                 <FeturesGardeners></FeturesGardeners>
                 <Tranding></Tranding>
                 <Guide></Guide>
                 {!user&&<JoinComunity></JoinComunity>}
                 <CountDown></CountDown>
            </main>
            
        </div>
    );
};

export default Home;