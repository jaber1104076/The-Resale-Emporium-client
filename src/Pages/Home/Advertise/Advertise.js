import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {

    const { data: advertises = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='my-6'>
            <h3 className="text-center text-green-600 text-mono text-3xl">Advertise Item</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20'>
                {
                    advertises.map(adv =>
                        <div key={adv._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={adv.image} alt="Shoes" className="rounded-xl" />
                            </figure>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{adv.productName}</h2>
                                <p>Price: ${adv.price}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Advertise;