import React from 'react';
import {Link} from 'react-router-dom';
import {FaGithub, FaGoogle, FaFacebook} from 'react-icons/fa';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
    }

    return (
        <div className='login-page'>
            <div className="login-container p-6 md:p-10">
                <h2 className='form-title'>Welcome, Register Now!</h2>
                <form onSubmit={handleRegister} className='form'>
                    <div className='input-field-area'>
                        <input type="text" name="displayName" placeholder='Full Name' required/>
                        <input type="url" name="photoUrl" placeholder='Photo Url' required/>
                        <input type="email" name="email" placeholder='Email Address' required/>
                        <input type="password" name="password" placeholder='Password'  required/>
                        <input type="password" name="confirmPassword" placeholder='Confirm Password'  required/>
                        
                    </div>
                    <div className='input-submit-area'>
                        <input type="submit" value="Log in" className='submit-btn' />
                        <p className='toggle-page'>Already have an account? <Link className='toggle-btn' to='/login'>Login Now</Link></p>
                    </div>
                </form>
                <div className='horizontal-line'></div>
                <div className='third-party-login'>
                    <button>
                        <FaGoogle />
                    </button>
                    <button>
                        <FaFacebook />
                    </button>
                    <button>
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;