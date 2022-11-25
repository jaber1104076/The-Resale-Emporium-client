import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleProduct from './SingleProduct';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';
const Products = () => {

    const { data: products, isLoading = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }

    return (
        <div className='my-10 mx-20'>
            <div className='my-7'>
                <h3 className='text-center text-3xl text-orange-600 font-mono'>Catagory</h3>
                <p className='text-center text-orange-400 font-medium'>All kinds of catagory Showed here</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    products.map(p => <SingleProduct
                        key={p._id}
                        product={p}
                    ></SingleProduct>)
                }

            </div>
        </div>
    );
};

export default Products;