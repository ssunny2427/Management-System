import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import './css/sign.css';

function SignUp() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedRole, setSelectedRole] = useState("Select a role");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);

  const handleDropdownSelect = (eventKey) => {
    setSelectedRole(eventKey);
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/addUser', {
        username,
        name,
        password,
        role: selectedRole, 
        email,
        phone
      });
      
      setMessage('User registered successfully! Redirecting...');
      setTimeout(() => {
        navigate('/home3'); 
      }, 1500);
    } catch (error) {
      console.error(error); 
      if (error.response && error.response.status === 404) {
        setMessage('User not found.');
      } else {
        setMessage('Failed to register user: ' + error.message);
      }
    }
  };

  return (
    <div className="signup">
      <form onSubmit={formSubmit}>
        <div className="form-container">
          <h1>Sign Up</h1>

          <label className="form-label">
            Username:
            <input type="text" required onChange={handleUsernameChange} value={username} />
          </label>

          <label className="form-label">
            Full Name:
            <input type="text" required onChange={handleNameChange} value={name} />
          </label>

          <label className="form-label">
            Email:
            <input type="email" required onChange={handleEmailChange} value={email} />
          </label>

          <label className="form-label">
            Phone:
            <input type="text" required onChange={handlePhoneChange} value={phone} />
          </label>

          <label className="form-label">
            Password:
            <input type="password" required onChange={handlePasswordChange} value={password} />
          </label>

          <label className="form-label">
            Confirm Password:
            <input type="password" required onChange={handleConfirmPasswordChange} value={confirmPassword} />
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

          <button type="submit">Sign Up</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default SignUp;
