import React from 'react';
import './CheckOut.css';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
    const { price } = useLoaderData();
    const handleCheckOut = () => {
        console.log('clicked')
        toast.success('Congratulation. Now You Can Access The Course.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className='flex justify-center'>
            <div className='checkout-page my-16'>
                <div className="summary">
                    <p className='text-2xl text-center text-[var(--base-content)] font-bold'>Summary</p>
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-[1.1rem] text-center text-[var(--base-content)] font-bold'>Price:</p>
                            <p className='text-[1.1rem] text-center text-[var(--base-content)] font-bold'>{price} $</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[1.1rem] text-center text-[var(--base-content)] font-bold'>Tax:</p>
                            <p className='text-[1.1rem] text-center text-[var(--base-content)] font-bold'>00 $</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[1.1rem] text-center text-[var(--base-content)] font-bold'>Total:</p>
                            <p className='text-[1.1rem] text-center text-[var(--base-content)] font-bold'>{price} $</p>
                        </div>
                    </div>
                    <button className='checkout-btn' onClick={handleCheckOut}>Checkout</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;