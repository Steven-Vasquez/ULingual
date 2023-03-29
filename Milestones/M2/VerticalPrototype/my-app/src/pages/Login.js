import React from 'react'

function Login() {
    return(
        <div>
            <form>
                <label for="uemail"><b>Email</b></label>
                <input type = "text" placeholder="Email" name="uemail" required/>

                <label for="upassword"><b>Password</b></label>
                <input type="password" placeholder="Password" name = 'upassword' required/>

                <button type="submit">Login</button>
                <label>
                <input type='checkbox' checked="checked" name="remember"/> Remember me
                </label>
            </form>
        </div>
    );
}

export default Login;