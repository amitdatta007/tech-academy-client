import React, { useEffect, useState } from 'react';
import CatagoryItem from '../CatagoryItem/CatagoryItem';
import './Catagory.css';

const Catagory = () => {
    const [catagory , setCatagory] = useState([]);
    
    useEffect(() => {
        const loadCatagory = async() => {
            const res = await fetch('https://tech-academy-server.vercel.app/catagory');
            const data = await res.json();
            setCatagory(data);
        };
        loadCatagory();
    }, []);
    
    console.log(catagory)

    return (
        <div className='catagory'>
            <p className='text-2xl text-center font-extrabold text-[var(--base-content)]'>Catagories</p>
            <div className='flex flex-col gap-3'>
                {
                    catagory.map(c => <CatagoryItem key={c.catagoryId} catagory={c} />)
                }
            </div>
        </div>
    );
};

export default Catagory;