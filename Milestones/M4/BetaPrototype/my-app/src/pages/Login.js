import React, {useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import './stylesheets/Login.css'


function Login() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true; // Allow cookies to be stored in the browser

    const login = (e) => {
        e.preventDefault();
        const allConditionsMet = (
            usernameReg.trim().length > 0 &&
            passwordReg.trim().length > 0
        );
        console.log(usernameReg);
        if(allConditionsMet) {
            //axios.post("http://50.18.108.83:3001/login", {
            axios.post("http://localhost:3001/login", {
                Uusername: usernameReg,
                Upassword: passwordReg
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if(typeof res.data.message !== 'undefined' && res.data.message.length > 0) {
                    alert(res.data.message);
                } else {
                    alert(`Welcome back, ${usernameReg}!`)
                    navigate(`/Dashboard`);
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            alert("Enter your Username and Password to Log In.");
        }
    }
 
    return(
     <div className="login-page">
        <div className="login-box">
            <form className='login-form'>
                <h1>Login</h1>  
                    <div className='login-sectioning'>
                        <label>Username:</label>
                        <input type={'text'} placeholder="Username" required
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}
                        />
                    </div>
                    <div className='login-sectioning'>
                        <label>Password:</label>
                        <input type={'password'} placeholder="Password" required
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                        />
                    </div> 
                     
                    <button onClick={(e) => login(e)} className='log-1'>
                        Login
                    </button> 
                    <div className='lg-nu'>
                    <p>
                        <Link to="/register">New User? Click Here!</Link>
                    </p>
                    </div>
            </form>
        </div>
    </div>
    );
}

export default Login;