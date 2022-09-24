import React from 'react';
import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is Sleeping</h2>
            <img className='w-50' src={sleeping} alt="" />

        </div>
    );
};

export default NotFound;