import React from 'react';
import Navbar from '../shared/navbar/Navbar/Navbar';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className='h-[calc(100vh-72px)] flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-5xl text-center text-[var(--base-content)] font-extrabold'><span className='text-[var(--primary)]'>404</span> | Not Found!</h2>
                <p className='text-center text-[var(--base-content)] font-semibold'>Go Back to <Link className='text-[var(--primary)] hover:underline' to='/'>Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;