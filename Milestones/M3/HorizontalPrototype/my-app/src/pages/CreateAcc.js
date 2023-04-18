import React from "react";

import './CreateAcc.css';


const CreateAcc = () => {
    return(
        <form>
            <div className='layer-1'>
                <h2>Create Account</h2>
                <div className='form-grouping'>
                    <label>Username:</label>
                    <input type={'text'} name="Username"/>
                </div>
                <div className='form-grouping'>
                    <label>Password:</label>
                    <input type={'password'} name="Password"/>
                </div>
                <div className='form-grouping'>
                    <label>Email:</label>
                    <input type={'email'} name="Email@test.com"/>
                </div>
                <input type={'submit'} value='Create Account!'/>  
            </div>
        </form>

    );


}

export default CreateAcc;