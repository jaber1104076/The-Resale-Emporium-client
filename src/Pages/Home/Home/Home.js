import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
const Home = () => {

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;