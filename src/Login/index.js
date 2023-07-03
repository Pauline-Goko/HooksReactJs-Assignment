import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {
    // Updating the states and initilizing them
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // for preventing the default form properties
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
        }
        console.log({data});

        try{
        // fetching the api
        const response = await fetch('https://dummyjson.com/auth/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body : JSON.stringify(data)
        }
        );
        const result = await response.json()
        console.log(result);
        }
        catch(error){
            console.log(error.message);
        }
    }
    
    return(
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input placeholder="Enter Usename" type="text"
            onChange ={(e) => setUsername(e.target.value)}
            />
            <br/>
            <br/>
            <input placeholder="Enter Password" type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <Link to="/products"> <button id="login">Login</button> </Link>
        </form>
        </div>
    );
}

export default Login;