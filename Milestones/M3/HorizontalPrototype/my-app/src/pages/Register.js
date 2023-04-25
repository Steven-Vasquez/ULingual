import React, { useState } from "react";
import axios from "axios";
import './Register.css';




const Register = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
  
    const createAccount = () => {
        axios.post("http://50.18.108.83:3001/register", {
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
        <form>
            <div className='layer-1'>
                <h2>Create Account</h2>
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
                <div className='form-grouping'>
                    <label>Email:</label>
                    <input type={'email'} name="Email@test.com"
                    onChange={(e) => {
                        setEmailReg(e.target.value)
                    }}
                    />
                </div>
                <input type={'submit'} onClick={createAccount} value='Create Account!'/>   
            </div>
        </form>

    );


}

export default Register;