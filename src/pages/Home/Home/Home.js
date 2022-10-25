import React, { useEffect, useRef } from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom';
import lottie from 'lottie-web';

const Home = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: require('../../../assets/learning1.json'),
        })
    }, []);


    return (
        <div className='home-page'>
            <div className='home flex flex-col lg:flex-row my-24'>
                <div className='w-full lg:w-1/2'>
                    <div className='' ref={container}></div>
                </div>
                <div className='w-full lg:w-1/2 p-5 flex flex-col gap-4 justify-center'>
                    <h2 className='banner-title'>Learn Effectively that will take you towards your goal</h2>
                    <p className='banner-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur expedita praesentium deleniti nihil quod quasi nobis fugiat esse maiores eos? Unde accusamus inventore eos consectetur eaque quae sequi ipsum molestiae.</p>
                    <Link className='explore-courses-btn' to='/courses'>Explore Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;