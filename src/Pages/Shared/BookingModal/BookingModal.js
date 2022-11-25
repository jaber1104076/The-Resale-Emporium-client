import React from 'react';

const BookingModal = ({ booking, setBooking }) => {
    const handelNull = () => {
        setBooking(null)
    }
    return (
        <>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{booking.model}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label
                            onClick={handelNull}
                            htmlFor="confirm-modal"
                            className="btn py-3 rounded-lg hover:text-gray-100 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white "
                        >submit</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;