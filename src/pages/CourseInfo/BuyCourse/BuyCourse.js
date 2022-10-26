import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const BuyCourse = ({id, name, price, students, rating }) => {
    return (
        <div className='buy-course'>
            <p className='text-[1.4rem] font-bold text-[var(--base-content)]'>{name}</p>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[var(--base-content)]'>Rating: </p>
                <p className='flex items-center gap-2 font-semibold text-[var(--warning)]'>{rating} <div className='flex items-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></div></p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[var(--base-content)]'>Total Student: </p>
                <p className='font-semibold text-[var(--warning)]'>{students} Peoples</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[var(--base-content)] text-[1.2rem]'>Price: </p>
                <p className='text-2xl font-bold text-[var(--warning)]'>${price}</p>
            </div>
            <Link className='get-premium-btn' to={`/checkout/${id}`}>Get Premium Access</Link>
        </div>
    );
};

export default BuyCourse;