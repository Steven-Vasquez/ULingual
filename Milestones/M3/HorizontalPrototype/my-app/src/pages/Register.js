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
                        <input type={'text'} name="Username"
                        onChange={(e) => {
                            setFirstnameReg(e.target.value)
                        }}
                        ></input>
                    </div>
                    <div>
                    <label>Last Name:</label>
                        <input type={'text'} name="Username"
                        onChange={(e) => {
                            setLastnameReg(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <label>Username:</label>
                        <input type={'text'} name="Username"
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type={'email'} name="Email@test.com"
                        onChange={(e) => {
                            setEmailReg(e.target.value)
                        }}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type={'password'} name="Password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}
                        />
                    </div>
                    <div className="TOS">
                        <label>
                            <Link to="/TermsAndConditions">
                            Accept Terms & Conditions
                            </Link>
                        </label>
                        <input type="checkbox" required/>
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