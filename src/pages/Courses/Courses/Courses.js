import React from 'react';
import Catagory from '../Catagory/Catagory';
import './Courses.css';
import {Outlet} from 'react-router-dom';

const Courses = () => {
    return (
        <div className='flex justify-center'>
            <div className="course-page">
                <Catagory />
                <Outlet></Outlet>
            </div>
        </div>
    );
};
export default Courses;