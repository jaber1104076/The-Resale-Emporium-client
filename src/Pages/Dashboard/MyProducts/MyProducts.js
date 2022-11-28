import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/ContextProvider';
import useTitle from '../../../Hooks/UseTitle';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';


const MyProducts = () => {
    const { user } = useContext(AuthContext)

    useTitle('My Products')
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

    const handleAdvertise = ({ productName = "", price = 0, image = "" }) => {
        const data = new Date()
        const confirm = window.confirm('Are you sure want to confirm ')
        if (confirm) {
            fetch('http://localhost:5000/advertise', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    productName,
                    price,
                    image,
                    time: data.getTime(),
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('data posted succesfuly')
                    refetch()
                })
        }

    }
    const handleDeleteProducts = (id) => {
        const confirm = window.confirm('Are you sure to delete products')
        if (confirm) {
            fetch(`http://localhost:5000/myProducts/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success('Product deleted successfully')
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <h3 className='text-2xl text-[#B762C1] font-mono mb-5'>My products</h3>
                <div className="overflow-x-auto">
                    <table className="table sm:w-1/4 lg:w-full">
                        <thead className='text-green-500'>
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
                                    <td>${addproduct.price}</td>
                                    <td>Status Not found</td>
                                    <td><button onClick={() => handleAdvertise((addproduct))} className="btn btn-sm btn-outline btn-secondary mt-3">Advertisement</button></td>
                                    <td><button onClick={() => handleDeleteProducts(addproduct._id)} className="btn btn-sm btn-outline btn-error mt-3">Delete</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;