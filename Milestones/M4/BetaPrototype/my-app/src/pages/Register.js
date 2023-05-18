import React, { useState } from "react";
import axios from "axios";
import './stylesheets/Register.css';
import { Link, useNavigate } from "react-router-dom";




const Register = () => {

    const [firstnameReg, setFirstnameReg] = useState("");
    const [lastnameReg, setLastnameReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [nativeLanguage, setNative] = useState(1);
    const [learningLanguage, setLearning] = useState(1);
    const navigate = useNavigate();
    const usernameChecker = /^\S{4,20}$/;
    const passwordChecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [errorMessage, setErrorMessage] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
    });

    const validateUsername = (username) => {
        let error = '';
        if(!usernameChecker.test(username)) {
            error = 'Username must be 4-20 characters long.';
        }
        setErrorMessage((prevState) => ({ ...prevState, username: error }));
    };

    const validatePassword = (password) => {
        let error = '';
        if (!passwordChecker.test(password)) {
            error = 'Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.'
        }
        setErrorMessage((prevState) => ({ ...prevState, password: error }));
    };

    const validateEmail = (email) => {
        let error = '';
        if (!emailRegex.test(email)) {
            error = 'Valid Format: valid@email.com';
        }
        setErrorMessage((prevState) => ({ ...prevState, email: error }));
    };

    const changeNative = (e) => {
        setNative(e.target.value);
    }

    const changeLearning = (e) => {
        setLearning(e.target.value);
    }
  
    const createAccount = (e) => {
        e.preventDefault();
        const allConditionsMet = (
            firstnameReg.trim().length > 0 &&
            lastnameReg.trim().length > 0 &&
            usernameChecker.test(usernameReg) &&
            passwordChecker.test(passwordReg) &&
            emailRegex.test(emailReg) &&
            isChecked
        );
        if(allConditionsMet) {
            if(nativeLanguage == learningLanguage) {
                alert("Your selected language to learn cannot be the same as your native language.")
            } else {
                //axios.post("https://50.18.108.83.nip.io:3001/register", {
                axios.post("http://localhost:3001/register", {
                    Ufirstname: firstnameReg,
                    Ulastname: lastnameReg,
                    Uusername: usernameReg,
                    Upassword: passwordReg,
                    Uemail: emailReg,
                    NativeLanguageID: nativeLanguage,
                    LearningLanguageID: learningLanguage
                })
                .then(res => {
                    if(typeof res.data.message !== 'undefined' && res.data.message.length > 0) {
                        alert(res.data.message);
                    } else {
                        alert(`New Account created for ${usernameReg}!`)
                        navigate(`/login`);
                    }
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        } else {
            alert("One or more fields are incomplete!");
        }
    }

    return(
    <div className="register-page">
        <div className="register-box">
            <form className="register-form">
                <h1>Create Account</h1>

                    <div>
                    <label>First Name:</label>
                        <input type={'text'} placeholder="First Name" required
                        onChange={(e) => {
                            setFirstnameReg(e.target.value)
                        }}
                        ></input>
                    </div>
                    <div>
                    <label>Last Name:</label>
                        <input type={'text'} placeholder="Last Name" required
                        onChange={(e) => {
                            setLastnameReg(e.target.value)
                        }}

                        ></input>

                    </div>
                    <div>
                        <label>Username:</label>
                        <input type={'text'} placeholder="Username" required
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                            validateUsername(e.target.value)
                        }}
                        onBlur={(e) => validateUsername(e.target.value)}
                        onFocus={(e) => validateUsername(e.target.value)}
                        />
                        {errorMessage.username && (<span className="error">{errorMessage.username}</span>)}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type={'email'} placeholder="Email@email.com" required
                        onChange={(e) => {
                            setEmailReg(e.target.value)
                            validateEmail(e.target.value)
                        }}
                        onBlur={(e) => validateEmail(e.target.value)}
                        onFocus={(e) => validateEmail(e.target.value)}
                        />
                        {errorMessage.email && (<span className="error">{errorMessage.email}</span>)}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type={'password'} placeholder="Password" required
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                            validatePassword(e.target.value)
                        }}
                        onBlur={(e) => validatePassword(e.target.value)}
                        onFocus={(e) => validatePassword(e.target.value)}
                        />
                        {errorMessage.password && (<span className="error">{errorMessage.password}</span>)}
                    </div>
                    <div className="TOS">
                        <label>
                            <input type="checkbox" checked={isChecked} 
                                onChange={(e) => {
                                    setIsChecked(!isChecked);
                                }}
                                className="check-1" required
                            />
                            <Link to="/TermsAndConditions">
                            Accept Terms & Conditions
                            </Link>
                        </label>
                        {/*

                            Note to backend team:
                            This needs to be validated and stored in database:

                            Both Native Language & Language Learning!
                        
                        */}
                        <div className="language-inits">
                            <label htmlFor="native-select">Select Native Language:</label>
                            <select name="native-select" id="native-select" defaultValue={nativeLanguage} onChange={changeNative}>
                                <option value="1">English</option>
                                <option value="2">Spanish</option>
                                <option value="3">French</option>
                                <option value="4">Arabic</option>
                                <option value="5">Korean</option>
                            </select>

                            <label htmlFor="learn-select">Select Language To Learn:</label>
                            <select name="learn-select" id="learn-select" defaultValue={learningLanguage} onChange={changeLearning}>
                                <option value="1">English</option>
                                <option value="2">Spanish</option>
                                <option value="3">French</option>
                                <option value="4">Arabic</option>
                                <option value="5">Korean</option>
                            </select>
                        </div>
                        
                    </div>
                    <button onClick={(e) => createAccount(e)} className="reg-1">
                        Create Account
                    </button>  
                    <p>
                        <Link to="/login">Have an account? Click here!</Link>
                    </p>
            </form>
        </div>
    </div>

    );


}

export default Register;