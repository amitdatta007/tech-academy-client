import React from 'react';
import {useLoaderData} from 'react-router-dom';

const ShowCourses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='bg-sky-600'>
            fsdsaffs
        </div>
    );
};

export default ShowCourses;