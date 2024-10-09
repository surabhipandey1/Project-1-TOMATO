import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currstate, setCurrstate] = useState('Login')

    // Function to toggle between login and signup
    const toggleState = () => {
        setCurrstate(currstate === 'Login' ? 'Signup' : 'Login')
    }

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                    <h2>{currstate}</h2>
                </div>
                <div className='login-popup-inputs'>
                    {currstate === 'Signup' && <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>
                    {currstate === 'Signup' ? 'Create account' : 'Log in'}
                </button>
                {currstate === 'Signup' && (
                    <div className='login-popup-condition'>
                        <input type="checkbox" required />
                        <p>By continuing, I agree to the terms and conditions</p>
                    </div>
                )}
                <p>
                    {currstate === 'Login'
                        ? <>Don't have an account? <span onClick={toggleState}>Sign up</span></>
                        : <>Already have an account? <span onClick={toggleState}>Log in</span></>
                    }
                </p>
            </form>
        </div>
    )
}

export default LoginPopup
