import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Select-pana.png'
const Banner = () => {
    return (
        <div className='mt-5 mb-5'>
            <section className="bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] text-gray-100 rounded-lg">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">The Resale Emporium
                            <span className="dark:text-violet-400"></span> for all Customer
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">The Resale Emporium provide with all kinds of reuse-
                            <br className="hidden md:inline lg:hidden" />products with different types of products
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Subscribe</Link>
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">About us</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={logo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;