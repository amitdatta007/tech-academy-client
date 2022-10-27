import React from 'react';
import './SingleCourse.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { id, name, description, price, rating, thumbnail } = course;
    return (
        <div className='course'>
            <div>
                <Link to={`/course/${id}`}>
                    <img src={thumbnail} alt="" />
                </Link>
            </div>
            <div className='flex flex-col justify-between p-2'>
                <div>
                    <Link to={`/course/${id}`}>
                        <h2 className='text-2xl font-bold text-[var(--success)]'>{name}</h2>
                    </Link>
                    <p className='text-[var(--base-content)]'>{description.slice(0, 120)} ... <Link className='text-[var(--primary)]' to={`/course/${id}`}>Read More</Link></p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-2 font-semibold text-[var(--warning)]'>{rating} <span className='flex items-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></span></p>
                    <div className='price'>{price}$</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;