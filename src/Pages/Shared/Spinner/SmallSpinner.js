import React from 'react'

const SmallSpinner = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-8 h-8 border-2 border-dashed rounded-full animate-spin border-blue-500'></div>
        </div>
    )
}

export default SmallSpinner