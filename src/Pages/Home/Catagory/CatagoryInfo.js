import React, { useEffect, useState } from 'react';
import BookingModal from '../../Shared/BookingModal/BookingModal';

const CatagoryInfo = ({ catagory }) => {
    const [booking, setBooking] = useState(null)
    const [data, setData] = useState("")
    const { model, resale_price, original_price, seller, use, image, location, _id } = catagory

    useEffect(() => {
        fetch(`http://localhost:5000/catagories/${_id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [_id])

    return (
        <div>
            <div className="card bg-base-100 shadow-2xl mt-10 mb-5">
                <figure><img src={image} alt="Shoes" className='w-[300px] h-[250px] mt-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{model}</h2>
                    <h2>Location:{location}</h2>
                    <div className='flex justify-between'>
                        <p>Original Price: ${resale_price}</p>
                        <p>Resale Price: ${original_price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Seller: {seller}</p>
                        <p>Used: {use}years</p>
                    </div>
                    <div className="card-action mt-5 flex justify-center">
                        <label onClick={() => setBooking(data)} htmlFor="confirm-modal"
                            className="btn w-full py-3 rounded-lg hover:text-gray-100 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white "
                        >Book Now</label>
                    </div>
                </div>
            </div>
            {booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>}
        </div>
    );
};

export default CatagoryInfo;