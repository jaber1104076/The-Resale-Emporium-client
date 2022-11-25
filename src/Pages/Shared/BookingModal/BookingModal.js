import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/ContextProvider';

const BookingModal = ({ booking, setBooking, refetch }) => {
    const { user } = useContext(AuthContext)
    const { model, resale_price } = booking

    const handlenull = () => {
        setBooking(null)
    }

    const handleBooking = (event) => {
        const data = new Date()
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const book = {
            model,
            customer: name,
            email,
            phone,
            price: resale_price,
            address,
            time: data.getTime()
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null)
                    toast.success('Booking confirmed');
                    refetch()
                }
                else {
                    toast.error(data.message);
                }
            })


    }



    return (
        <>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={handlenull} htmlFor="confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{model}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" defaultValue={booking.model} disabled className="input w-full input-bordered " />
                        <input type="text" defaultValue={booking.resale_price} disabled className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="address" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className="btn py-3 rounded-lg hover:text-gray-100 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white w-full" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;