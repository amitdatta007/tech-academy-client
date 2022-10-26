import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const [error, setError] = useState(null);
    const { signIn, handleGoogleLogin, handleFacebookLogin, handleGithubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        setError(null);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password Should be 6 Character or More.');
            return;
        };

        signIn(email, password)
            .then(() => {
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.code)
                if (err.code === 'auth/user-not-found') {
                    setError('User Not Found!');

                };
                if (err.code === 'auth/wrong-password') {
                    setError('Wrong Password!');
                };
            });
    };

    const loginByGoogle = () => {
        handleGoogleLogin()
        .then(() => {
            navigate(from, { replace: true });
        })
    };

    const loginByFacebook = () => {
        handleFacebookLogin()
        .then(() => {
            navigate(from, { replace: true });
        })
    };

    const loginByGithub = () => {
        handleGithubLogin()
        .then(() => {
            navigate(from, { replace: true });
        })
    };

    

    return (
        <div className='login-page'>
            <div className="login-container p-6 md:p-10">
                <h2 className='form-title'>Hi, Welcome Back!</h2>
                <form onSubmit={handleLogin} className='form'>
                    <div className='input-field-area'>
                        <input type="email" name="email" placeholder='Email Address' required />
                        <input type="password" name="password" placeholder='Password' required />
                        <div className='forgot-pass-area'>
                            <Link className='forgot-pass'>Forgot Password?</Link>
                        </div>
                        {
                            error && <div className='error-msg'>
                                <p>{error}</p>
                            </div>
                        }
                    </div>
                    <div className='input-submit-area'>
                        <input type="submit" value="Log in" className='submit-btn' />
                        <p className='toggle-page'>Don't have an account? <Link className='toggle-btn' to='/register'>Registration Now</Link></p>
                    </div>
                </form>
                <div className='horizontal-line'></div>
                <div className='third-party-login'>
                    <button onClick={loginByGoogle}>
                        <FaGoogle />
                    </button>
                    <button onClick={loginByFacebook}>
                        <FaFacebook />
                    </button>
                    <button onClick={loginByGithub}>
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;