import React from 'react'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <p className='text-7xl font-thin'>C</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
            <p className='text-7xl font-thin'>ming soon...</p>
        </div>
    )
}

export default Spinner