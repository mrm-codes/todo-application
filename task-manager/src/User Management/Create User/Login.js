import React, {useState} from "react";
import axios from 'axios';

export default function LoginUser(){

    const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/api/login', { username, password });
        console.log(response.data);
        
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        } catch (err) {
        console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login User</h2>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <button type="submit">Login</button>
        </form>
    );
    }
}