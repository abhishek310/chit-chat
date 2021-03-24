import { useState } from "react";
import './index.css';

function Login() {

    let [signin, setSignin] = useState(true);
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    let toggleSignMode = () => {
        setSignin(!signin);
    };

    let handleSignIn = () => {

    };

    let handleSignUp = () => {

    };

    return (
        <div className="Login">
            {signin || <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />}
            <input type="text" placeholder="E-Mail Address" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" minLength="6" value={password} onChange={e => setPassword(e.target.value)} />
            {signin && <button className="sign-button" onClick={handleSignIn}>Sign In</button>}
            {signin || <button className="sign-button" onClick={handleSignUp}>Sign Up</button>}
            <span className="switch-span">
                <p>{signin ? "New user?" : "Existing user?"}</p>
                <button className="switch-button" onClick={toggleSignMode}>{signin ? "Sign Up" : "Sign In"}</button>
            </span>
        </div>
    );
}

export default Login;