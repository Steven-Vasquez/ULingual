import React, {useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import './stylesheets/Login.css'


function Login() {
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [errorMessage, setErrorMessage] = useState({
        username: '',
        password: '',
    });

    const validateUsername = (username) => {
        let error = '';
        if (username.trim() === '') {
          error = 'Username is required!';
        }
        setErrorMessage((prevState) => ({ ...prevState, username: error }));
      };

      const validatePassword = (password) => {
        let error = '';
        if (password.trim() === '') {
          error = 'Password is required!';
        }
        setErrorMessage((prevState) => ({ ...prevState, password: error }));
      };

    const login = () => {
        axios.get("http://50.18.108.83:3001/login", {
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
                        <input type={'text'} name="Username" required
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}
                        onBlur={(e) => validateUsername(e.target.value)}
                        /> 
                        {errorMessage.username && (<span className="error">{errorMessage.username}</span>)}
                    </div>
                    <div className='login-sectioning'>
                        <label>Password:</label>
                        <input type={'password'} name="Password" required
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                        onBlur={(e) => validatePassword(e.target.value)}
                        />
                        {errorMessage.password && (<span className="error">{errorMessage.password}</span>)}
                    </div> 
                     
                    <button onClick={login} className='log-1'>
                        <Link to="/Dashboard">Login</Link>
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