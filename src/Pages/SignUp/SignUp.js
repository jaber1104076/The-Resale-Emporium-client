import React, { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../contexts/ContextProvider';
import useTitle from '../../Hooks/UseTitle';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const SignUp = () => {
    const { CreateUser, googleSignIn, updateUser } = useContext(AuthContext)
    const [error, setError] = useState("")
    useTitle('Sign up')
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        CreateUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        form.reset()
                        navigate('/')
                    })
                    .catch(err => console.log(err));

            })
            .catch((err) => {
                console.log(err)
                setError(err.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='mt-5 mb-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-96">
                        <h1 className="text-3xl font-bold text-center p-5">Register Now!</h1>
                        <Form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {/* <button className="btn bg-purple-500">Sign Up</button> */}
                                <PrimaryButton classes='py-3 rounded-md'>Sign up </PrimaryButton>
                            </div>
                        </Form>
                        {error && <span className='mx-auto text-red-600'>{error}</span>}
                        <span className='mx-auto'>Already have account? <Link className='text-orange-500 text-lg' to='/login'>Login</Link></span>
                        <div className='mx-auto'>
                            <p className='text-blue-500 text-xl'>Or Signup with</p>
                            <button onClick={handleGoogleSignIn} className='text-2xl p-5' ><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;