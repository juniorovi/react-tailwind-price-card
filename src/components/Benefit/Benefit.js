import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Benefit = (props) => {
    return (
        <p className='flex items-center'>
            <CheckCircleIcon className='w-4 h-4 text-green-600 mr-2'></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default Benefit;