import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const MainLayout = () => {
    const {state}=useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {state=="loading"?<Loading></Loading>:<Outlet></Outlet>}
            <Footer></Footer>           
        </div>
    );
};

export default MainLayout;