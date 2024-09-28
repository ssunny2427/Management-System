import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
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
        const users = {
            student1: { username: "Alice Johnson", password: "12345678", role: "STUDENT", name: "Alice Johnson" },
            faculty1: { username: "Emma Clark", password: "12345678", role: "FACULTY_MEMBER", name: "Dr. Emma Clark" },
            admin1: { username: "Samuel Green", password: "12345678", role: "ADMINISTRATOR", name: "Samuel Green" },

        };

        let loggedInUser = null;

        for (const userKey in users) {
            const user = users[userKey];
            if (username === user.username && password === user.password) {
                loggedInUser = user;
                break;
            }
        }

        if (loggedInUser) {
            setMessage('Login successful! Redirecting...');
            localStorage.setItem('userName', loggedInUser.name);
            switch (loggedInUser.role) {
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
                    navigate('/home');
            }
        } else {
            setMessage('Invalid username, password, or role. Please try again.');
        }
    };

    return (
        <>
            <div className='form-wrapper'>
                <form onSubmit={formSubmit}>
                    <h1 className="textt1">Log In</h1>
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
            </div>
        </>
    );
}

export default LoginIn;
