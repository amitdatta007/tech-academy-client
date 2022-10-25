import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {FaGithub, FaGoogle, FaFacebook} from 'react-icons/fa';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }

    return (
        <div className='login-page'>
            <div className="login-container p-6 md:p-10">
                <h2 className='form-title'>Hi, Welcome Back!</h2>
                <form onSubmit={handleLogin} className='form'>
                    <div className='input-field-area'>
                        <input type="email" name="email" placeholder='Username or Email Address'/>
                        <input type="password" name="password" placeholder='Password'  />
                        <div className='forgot-pass-area'>
                            <Link className='forgot-pass'>Forgot Password?</Link>
                        </div>
                    </div>
                    <div className='input-submit-area'>
                        <input type="submit" value="Log in" className='submit-btn' />
                        <p className='toggle-page'>Don't have an account? <Link className='toggle-btn' to='/register'>Registration Now</Link></p>
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

export default Login;