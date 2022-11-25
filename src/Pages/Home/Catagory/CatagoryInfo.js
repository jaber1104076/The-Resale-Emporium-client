import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const CatagoryInfo = ({ catagory }) => {
    const { model, resale_price, original_price, seller, use, image } = catagory
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl mt-10 mb-5">
                <figure><img src={image} alt="Shoes" className='w-[300px] h-[300px] mt-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{model}</h2>
                    <div className='flex justify-between'>
                        <p>Original Price: ${resale_price}</p>
                        <p>Resale Price: ${original_price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Seller: {seller}</p>
                        <p>Used: {use}years</p>
                    </div>
                    <div className="card-action mt-5 flex justify-center">
                        <PrimaryButton classes='w-full py-3 rounded-lg'>Book Now</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryInfo;