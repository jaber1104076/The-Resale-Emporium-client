import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Catagory = () => {
    const catagories = useLoaderData()
    console.log(catagories)
    return (
        <div>
            <h3>the catagory have {catagories.length} data</h3>
        </div>
    );
};

export default Catagory;