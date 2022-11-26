import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/ContextProvider';
import UseAdmin from '../Hooks/UseAdmin';
import useTitle from '../Hooks/UseTitle';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { FaUsers } from "react-icons/fa";
import { MdAddComment, MdAddCircle } from "react-icons/md";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    useTitle('Deshboard')
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-black font-serif">

                        <li><Link to='/dashboard/myorder'><MdAddCircle className='text-red-600' /> My Orders</Link></li>
                        {
                            isAdmin && <li><Link to='/dashboard/allusers'><FaUsers className='text-[#e52d27] w-[25px] h-[25px]' /> All user</Link></li>
                        }
                        <li><Link to='/dashboard/addproducts'><MdAddComment className='text-red-600' />  Add A Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;