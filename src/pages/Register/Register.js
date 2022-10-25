import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import {FaGithub, FaGoogle, FaFacebook} from 'react-icons/fa';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const [error, setError] = useState(null);

    const {createUser, updateUser, setProfileUpdated, profileUpdated, handleGoogleLogin, handleFacebookLogin, handleGithubLogin} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        setError(null);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const name = form.displayName.value;
        const photoUrl = form.photoUrl.value;

        if (password.length < 6) {
            setError('Password Should be 6 Character or More.');
            return;
        };
        if (password !== confirmPassword) {
            setError('Your Password Did Not Match.');
            return;
        };
        createUser(email, password)
        .then(() => {
            updateUser(name, photoUrl)
            .then(() => {
                setProfileUpdated(!profileUpdated);
            })
            .catch(() => {});
            form.reset();
        })
        .catch(err => {
           if(err.code === 'auth/email-already-in-use'){
            setError('Email Already Used.')
           }
        });
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
                        {
                            error && <div className='error-msg'>
                                <p>{error}</p>
                            </div>
                        }
                    </div>
                    <div className='input-submit-area'>
                        <input type="submit" value="Log in" className='submit-btn' />
                        <p className='toggle-page'>Already have an account? <Link className='toggle-btn' to='/login'>Login Now</Link></p>
                    </div>
                </form>
                <div className='horizontal-line'></div>
                <div className='third-party-login'>
                    <button onClick={handleGoogleLogin}>
                        <FaGoogle />
                    </button>
                    <button onClick={handleFacebookLogin}>
                        <FaFacebook />
                    </button>
                    <button onClick={handleGithubLogin}>
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;