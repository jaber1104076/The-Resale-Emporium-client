import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/ContextProvider';
import SmallSpinner from '../../Shared/Spinner/SmallSpinner';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: order, isLoading = [] } = useQuery({
        queryKey: ['myorder', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorder?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }

    return (
        <div>
            <h3 className='text-3xl font-mono text-gray-800 mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>title</th>
                            <th>price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order &&
                            order?.sort((a, b) => b.time - a.time).map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full">
                                            <img src={booking.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.model}</td>
                                <td>${booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;