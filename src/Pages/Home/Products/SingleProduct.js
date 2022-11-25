import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { image, name } = product
    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-[200px] h-[200px] shadow-xl rounded-md' /></figure>
            <div className="card-body">
                <div className="card-actions justify-center">
                    <Link
                        to={`/catagory/${name}`}>
                        <button
                            className="hover:text-green-200 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white px-3 py-3 rounded-md">
                            {name}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;