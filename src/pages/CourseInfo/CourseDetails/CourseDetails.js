import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf'

const CourseDetails = ({ thumbnail, author, description, name }) => {

    const ref = useRef();
    

    return (
        <div className='p-8 course-details flex flex-col gap-6'>
            <img src={thumbnail} alt="" />
            <div className='p-4 flex flex-col gap-10' ref={ref}>
                <div>
                    <p className='course-title'>{name}</p>
                    <p className='author'>By - {author}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[1.2rem] font-bold text-[var(--base-content)]'>Description -</p>
                    <p className='text-[var(--base-content)]'>{description}</p>
                </div>
            </div>
            <ReactToPdf targetRef={ref} filename="Course info.pdf"  x={.5} y={.5} scale={0.95}>
                {({ toPdf }) => (
                    <button className='download-pdf-btn' onClick={toPdf}>Download Course Info</button>
                )}
            </ReactToPdf>
        </div>
    );
};

export default CourseDetails;