import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const AllUser = () => {

    const [deleteUser, setDeletinguser] = useState(null)

    const closeModal = () => {
        setDeletinguser(null)
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
    }

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <div>
                <h2 className="text-3xl mb-5">All Users</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                    <td>
                                        <label onClick={() => setDeletinguser(user)} htmlFor="my-modal" className='btn btn-xs btn-warning '>delete</label>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
            {deleteUser &&
                <ConfirmModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.name} It cannot be undone.`}
                    successAction={handleDeleteUser}
                    closeModal={closeModal}
                    modalData={deleteUser}
                ></ConfirmModal>}
        </div>
    );
};

export default AllUser;