import React from "react";
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
const LoginForm =()=>{
    return (
        <div className="home">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required></input>
                    <FaUser />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required></input>
                    <FaLock />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"></input>Remember me </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Dont have an account?<a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm ; 