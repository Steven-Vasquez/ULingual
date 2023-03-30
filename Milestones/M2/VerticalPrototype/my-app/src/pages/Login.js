import React from 'react'
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
                <a href=''>New User?</a>
            </div>
        </form>
    );
}

export default Login;