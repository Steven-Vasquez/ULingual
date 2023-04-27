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
     <div className="login-page">
        <div className="login-box">
            <form className='login-form'>
                <h1>Login</h1>  
                    <div className='login-sectioning'>
                        <label>Username:</label>
                        <input type={'text'} name="Username"
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}
                        /> 
                    </div>
                    <div className='login-sectioning'>
                        <label>Password:</label>
                        <input type={'password'} name="Password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                        />
                    </div> 
                     
                    <button onClick={login} className='log-1'>
                        <Link to="/Dashboard">Login</Link>
                        </button> 
                    <p>
                        <Link to ='/register'>New User?</Link>
                    </p>
            </form>
        </div>
    </div>
    );
}

export default Login;