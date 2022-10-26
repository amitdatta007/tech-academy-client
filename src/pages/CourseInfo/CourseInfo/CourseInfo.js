import React from 'react';
import './CourseInfo.css';
import {useLoaderData} from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import BuyCourse from '../BuyCourse/BuyCourse';

const CourseInfo = () => {

    const course = useLoaderData();
    const {id, name, description, author, rating, price, thumbnail} = course;
    

    return (
        <div className='flex justify-center'>
            <div className='course-info-page my-16'>
                <CourseDetails thumbnail={thumbnail} author={author} description={description} name={name} />
                <BuyCourse name={name} rating={rating} price={price} id={id} />
            </div>
        </div>
    );
};

export default CourseInfo;