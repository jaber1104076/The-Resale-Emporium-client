import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/ContextProvider';
import useTitle from '../../../Hooks/UseTitle';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useTitle('Add Products')
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handleAddProducts = event => {
        event.preventDefault()
        const form = event.target;
        const data = new Date()
        const username = form.username.value;
        const email = form.email.value;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.address.value;
        const year = form.year.value;
        const category = form.category.value;
        const details = form.description.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const addProducts = {
                        seller: username,
                        email,
                        productName: name,
                        price,
                        condition,
                        phone,
                        location,
                        year,
                        category,
                        details,
                        image: imgData.data.url,
                        time: data.getTime()
                    }
                    fetch('https://b612-used-products-resale-server-side-jaber1104076.vercel.app/addproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProducts)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Products Succesfully Added');
                                form.reset()
                                navigate('/dashboard/myproducts')
                            }
                            else {
                                toast.error(data.message);
                            }
                        })
                }
            })




    }

    return (
        <section>
            <h3 className='text-2xl font-mono mb-5'>Add Your Products</h3>
            <div className='w-100 p-5 shadow bg-gray-100 rounded-lg'>
                <h3 className="text-center text-gray-600 text-2xl">Provide relevent information</h3>
                <form onSubmit={handleAddProducts} className='grid grid-cols-2 gap-5 mt-5'>
                    <input name="username" type="text" defaultValue={user?.displayName} readOnly className="input  input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} readOnly className="input  input-bordered" />
                    <input name="name" type="text" placeholder="Your Products Name" className="input  input-bordered" />
                    <input name="price" type="text" placeholder="Products Price" className="input input-bordered" />
                    <input type="file" name='image' className="input input-bordered" />
                    <select name='condition' className="select select-bordered">
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                    <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered" />
                    <input name="address" type="text" placeholder="Meeting Location" className="input  input-bordered" />
                    <input name='year' type="text" placeholder='Year of Purchase' className="input  input-bordered " />
                    <select name='category' className="select select-bordered">
                        <option value='excellent'>Iphone</option>
                        <option value='good'>Samsung</option>
                        <option value='fair'>Xiomi</option>
                    </select>
                    <textarea className='p-2' name="description" placeholder='Add Your Products description'></textarea>
                    <br />
                    <input className="btn py-3 rounded-lg hover:text-gray-100 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white" type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default AddProducts;