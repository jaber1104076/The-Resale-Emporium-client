import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import Banner from '../Banner/Banner';
const Home = () => {

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;