import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import CatagoryInfo from './CatagoryInfo';
const Catagory = () => {
    const catagories = useLoaderData()
    useTitle('Catagory')
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 my-10'>
            {
                catagories.map(catagory => <CatagoryInfo
                    key={catagory._id}
                    catagory={catagory}
                ></CatagoryInfo>)
            }
        </div>
    );
};

export default Catagory;