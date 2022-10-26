import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const ShowCourses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='p-4 flex flex-col gap-10'>
            <p className='text-2xl font-bold text-center text-[var(--base-content)]'>{courses.length} Courses In This Catagory</p>
            <div className='flex flex-col gap-8'>
                {
                    courses.map(c => <SingleCourse key={c.id} course={c} />)
                }
            </div>
        </div>
    );
};

export default ShowCourses;