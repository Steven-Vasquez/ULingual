import React, { useState } from "react";
import axios from "axios";
import './stylesheets/Register.css';
import { Link } from "react-router-dom";




const Register = () => {

    const [firstnameReg, setFirstnameReg] = useState("");
    const [lastnameReg, setLastnameReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");

    const [errorMessage, setErrorMessage] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
    });

    const validateFirstName = (firstname) => {
        let error = '';
        if (firstname.trim() === '') {
          error = 'First name is required!';
        }
        setErrorMessage((prevState) => ({ ...prevState, firstname: error }));
      };

    const validateLastName = (lastname) => {
        let error = '';
        if (lastname.trim() === '') {
          error = 'Last name is required!';
        }
        setErrorMessage((prevState) => ({ ...prevState, lastname: error }));
      };  

    const validateUsername = (username) => {
        let error = '';
        if (username.trim() === '') {
          error = 'Username is required!';
        }
        setErrorMessage((prevState) => ({ ...prevState, username: error }));
      };

      const validatePassword = (password) => {
        let error = '';
        const passwordChecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
        if (password.trim() === '') {
          error = 'Password is required!';
        }
        else if (!passwordChecker.test(password)) {
            error = 'Needs at least one Upper, one Lower, one digit, one special character, and 8 characters.'
        }
        setErrorMessage((prevState) => ({ ...prevState, password: error }));
      };

      const validateEmail = (email) => {
        let error = '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
          error = 'Email is required!';
        }
        else if (!emailRegex.test(email) ){
            error = 'Invalid email format!';
        }
        setErrorMessage((prevState) => ({ ...prevState, email: error }));
      };
  
    const createAccount = () => {
        axios.post("http://50.18.108.83:3001/register", {
            Ufirstname: firstnameReg,
            Ulastname: lastnameReg,
            Uusername: usernameReg,
            Upassword: passwordReg,
            Uemail: emailReg
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
    <div className="register-page">
        <div className="register-box">
            <form className="register-form">
                <h1>Create Account</h1>

                    <div>
                    <label>First Name:</label>
                        <input type={'text'} name="Username" required
                        onChange={(e) => {
                            setFirstnameReg(e.target.value)
                        }}
                        onBlur={(e) => validateFirstName(e.target.value)}
                        ></input>
                        {errorMessage.firstname && (<span className="error">{errorMessage.firstname}</span>)}
                    </div>
                    <div>
                    <label>Last Name:</label>
                        <input type={'text'} name="Username" required
                        onChange={(e) => {
                            setLastnameReg(e.target.value)
                        }}
                        onBlur={(e) => validateLastName(e.target.value)}
                        ></input>
                        {errorMessage.lastname && (<span className="error">{errorMessage.lastname}</span>)}

                    </div>
                    <div>
                        <label>Username:</label>
                        <input type={'text'} name="Username" required
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}
                        onBlur={(e) => validateUsername(e.target.value)}
                        />
                        {errorMessage.username && (<span className="error">{errorMessage.username}</span>)}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type={'email'} name="Email@test.com" required
                        onChange={(e) => {
                            setEmailReg(e.target.value)
                        }}
                        onBlur={(e) => validateEmail(e.target.value)}
                        />
                        {errorMessage.email && (<span className="error">{errorMessage.email}</span>)}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type={'password'} name="Password" required
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                        onBlur={(e) => validatePassword(e.target.value)}
                        />
                        {errorMessage.password && (<span className="error">{errorMessage.password}</span>)}
                    </div>
                    <div className="TOS">
                        <label>
                            <Link to="/TermsAndConditions">
                            Accept Terms & Conditions
                            </Link>
                            <input type="checkbox" className="check-1" required />
                        </label>
                        
                    </div>
                    <button onClick={createAccount} className="reg-1">
                        <Link to="/Login">
                        Create Account
                        </Link>
                        </button>  
            </form>
        </div>
    </div>

    );


}

export default Register;