import React, {useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import './stylesheets/Login.css'

function Login() {
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const login = () => {
        axios.post("http://50.18.108.83:3001/login", {
            Uusername: usernameReg,
            Upassword: passwordReg,
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
        <form>
            <div className='layer-1'>
                <h2>Login</h2>
                
                <div className='form-grouping'>
                    <label>Username:</label>
                    <input type={'text'} name="Username"
                    onChange={(e) => {
                        setUsernameReg(e.target.value)
                    }}
                    />
                </div>
                
                <div className='form-grouping'>
                    <label>Password:</label>
                    <input type={'password'} name="Password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value)
                    }}
                    />
                </div>
                
                <input type={'submit'} onClick={login} value='Login'/>  
                <p>
                    <Link to ='/register'>New User?</Link>
                </p>
            </div>
        </form>
    );
}

export default Login;