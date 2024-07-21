import React, {useState} from "react";
import axios from 'axios';

export default function RegisterUser(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('/api/register', {username, password});
            console.log(response.data);
        } catch(err){
            console.error(err);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Register User</h2>
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
            <button type="submit">Register User</button>
        </form>
    );
}