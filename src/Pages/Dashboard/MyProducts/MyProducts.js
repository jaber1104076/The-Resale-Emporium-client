import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/ContextProvider';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';


const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: products, isLoading, refetch = [] } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }

    const handleAdvertise = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h3 className='text-2xl text-[#B762C1] font-mono'>My products {products.length}</h3>
            <div className="overflow-x-auto">
                <table className="table sm:w-1/4 lg:w-full">
                    <thead>
                        <tr><th>Sl. No</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertisement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            products &&
                            products.sort((a, b) => b.time - a.time).map((addproduct, i) => <tr key={addproduct._id}>
                                <th>{i + 1}</th>
                                <td>{addproduct.productName}</td>
                                <td>{addproduct.price}</td>
                                <td>Status Not found</td>
                                <td><button onClick={() => handleAdvertise(products._id)} className="btn btn-sm btn-success mt-3">Advertisement</button></td>
                                <td> <button className="btn btn-sm btn-error mt-3">Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;