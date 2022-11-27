import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
const Home = () => {

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Products></Products>

        </div>
    );
};

export default Home;