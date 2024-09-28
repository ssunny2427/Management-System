import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import './css/sign.css';
import Dropdown from 'react-bootstrap/Dropdown';

function LoginIn() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState("Select a role");

    
    const handleDropdownSelect = (eventKey) => {
        setSelectedRole(eventKey);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get(`http://localhost:8080/api/login`, { 
                 username
                // password, 
                // role: selectedRole  
            });

            if (response.data) {
                setMessage('User found! Redirecting...');
               
                switch (selectedRole) {
                    case 'STUDENT':
                        navigate('/student-dashboard');
                        break;
                    case 'FACULTY_MEMBER':
                        navigate('/faculty-dashboard');
                        break;
                    case 'ADMINISTRATOR':
                        navigate('/admin-dashboard');
                        break;
                    default:
                        navigate('/home3'); 
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage('User not found or incorrect role.');
            } else {
                setMessage('Failed to check user.');
            }
        }
    };

    return (
        <>
            <div className='signup'>
                <form onSubmit={formSubmit}>
                    <h1 className="textt1">Sign In</h1>

                    
                    <label className="textt1">
                        Username:
                        <input 
                            className="textt1" 
                            type="text" 
                            value={username}  
                            onChange={handleUsernameChange} 
                            required 
                        />
                    </label>

                    
                    <label className="textt1">
                        Password:
                        <input 
                            className="textt1" 
                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            required 
                        />
                    </label>

                   
                    <Dropdown onSelect={handleDropdownSelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selectedRole}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="STUDENT">Student</Dropdown.Item>
                            <Dropdown.Item eventKey="FACULTY_MEMBER">Faculty Member</Dropdown.Item>
                            <Dropdown.Item eventKey="ADMINISTRATOR">Administrator</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <br />
                   
                    <button type="submit">Sign In</button>
                </form>

               
                {message && <p>{message}</p>}

           
                <p className="texttt1">New to website? <a href="/signup" className='pooo'>Register</a></p>
            </div>
        </>
    );
}

export default LoginIn;
