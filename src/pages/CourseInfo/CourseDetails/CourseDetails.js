import React from 'react';

const CourseDetails = ({ thumbnail, author, description, name }) => {
    return (
        <div className='p-8 course-details flex flex-col gap-6'>
            <img src={thumbnail} alt="" />
            <div className='p-3 flex flex-col gap-10'>
                <div>
                    <p className='course-title'>{name}</p>
                    <p className='author'>By - {author}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[1.2rem] font-bold text-[var(--base-content)]'>Description -</p>
                    <p className='text-[var(--base-content)]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;