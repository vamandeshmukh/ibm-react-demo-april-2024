import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleLoginInput = (evt) => {
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    // sonu sonu 

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        alert('Logged in successfully!')

    };

    return (
        <>
            <h1>Login Component</h1>
            <p>Login here</p>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="username" value={loginData.firstName} onChange={handleLoginInput} />
                <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} />
                <input type="submit" value="Login" />
            </form>
            <>
                <p>username that you are entering: {loginData.username} </p>
                <p>password that you are entering: {loginData.password}</p>
            </>
        </>
    );
};
export default Login;