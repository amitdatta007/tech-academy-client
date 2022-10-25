import React, { useEffect, useState } from 'react';
import NavItem from '../NavItem/NavItem';
import './Navbar.css';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { HiSun, HiMoon } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.className = 'dark-theme';
        }
        if (!isDarkMode) {
            document.body.className = 'light-theme';
        }
    }, [isDarkMode]);


    return (
        <div className='flex justify-center duration-700'>
            <div className='navbar py-3 flex justify-between items-center'>
                <div className="logo z-20">
                    <Link to='/'>
                        <h2 className='logo-text'>
                            <span className='logo-text-left'>Tech</span>
                            <span className='logo-text-right'>Academy</span>
                        </h2>
                    </Link>
                </div>
                
                
                <div className='flex items-center gap-6'>
                    <div
                        className={`nav-items flex absolute md:static w-full h-[calc(100vh-60px)] md:h-fit md:w-fit md:gap-8 left-0 black font-semibold ${open ? 'top-[60px]' : 'top-[-120vh]'} ${open ? 'z-10' : 'z-10'} flex-col md:flex-row justify-center items-center duration-700 ease-in-out gap-3 md:duration-[0s]`}
                    >
                        <NavItem name='Courses' path='/courses' setOpen={setOpen} />
                        <NavItem name='FAQ' path='/faq' setOpen={setOpen} />
                        <NavItem name='Blogs' path='/blogs' setOpen={setOpen} />
                        <div className='vartical-line hidden md:block'></div>
                        <Link to='/login' className='login-btn' >Log In</Link>
                    </div>
                    <div className='z-20 theme-icon' onClick={() => setIsDarkMode(!isDarkMode)}>
                        {
                            isDarkMode ? <HiMoon /> : <HiSun />
                        }
                    </div>
                    <div onClick={() => setOpen(!open)} className="h-7 w-7 md:hidden z-20 menu-icon">
                        {
                            open ? <XMarkIcon /> : <Bars4Icon />
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;