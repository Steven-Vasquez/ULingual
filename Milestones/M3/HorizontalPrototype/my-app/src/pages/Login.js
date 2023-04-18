import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return(
        <form>
            <div className='layer-1'>
                <h2>Login</h2>
                <div className='form-grouping'>
                    <label>Username:</label>
                    <input type={'text'} name="Username"/>
                </div>
                <div className='form-grouping'>
                    <label>Password:</label>
                    <input type={'password'} name="Password"/>
                </div>
                <input type={'submit'} value='Login'/>  
                <p>
                <Link to ='/CreateAcc'>New User?</Link>
                </p>
            </div>
        </form>
    );
}

export default Login;