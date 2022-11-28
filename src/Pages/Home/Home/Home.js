import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import GetUpdate from '../GetUpate/GetUpdate';
import Products from '../Products/Products';
const Home = () => {

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Products></Products>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;