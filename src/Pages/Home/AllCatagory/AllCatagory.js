import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import CatagoryInfo from '../Catagory/CatagoryInfo';

const AllCatagory = () => {
    useTitle('All Category')
    const { data: catagories = [] } = useQuery({
        queryKey: ['allcatagory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allcatagory')
            const data = await res.json()
            return data
        }
    })


    return (
        <div>
            <h3 className="text-center mt-5 text-3xl text-green-500 font-mono">All Category </h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 my-5'>
                {
                    catagories.map(catagory => <CatagoryInfo
                        key={catagory._id}
                        catagory={catagory}
                    ></CatagoryInfo>)
                }
            </div>
        </div>
    );
};

export default AllCatagory;