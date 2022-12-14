import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/404 error with people holding the numbers-amico.png'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <img src={logo} alt="" />
                    </h2>
                    <p className="text-2xl font-semibold  text-gray-400 md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;