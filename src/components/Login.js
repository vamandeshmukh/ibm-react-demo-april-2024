import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterLoginMessage, setAfterLoginMessage] = useState('');

    const handleLoginInput = (evt) => {
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        if (loginData.username === 'sonu' && loginData.password === 'sonu') {
            setAfterLoginMessage(`Hi ${loginData.username}! You've logged in successfully!`);
            alert(`Hi ${loginData.username}! You've logged in successfully!`);
            setLoginData({ username: '', password: '' });
        }
        else {
            setAfterLoginMessage(`Invalid credentials!`);
            alert(`Invalid credentials!`);
            setLoginData({ username: '', password: '' });
        }
        evt.preventDefault();
    };

    return (
        <>
            <h1>Login Component</h1>
            <p>Login here</p>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="username" value={loginData.username} onChange={handleLoginInput} />
                <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} />
                <input type="submit" value="Login" />
            </form>
            <>
                <p>{afterLoginMessage && afterLoginMessage} </p>
            </>
        </>
    );
};
export default Login;