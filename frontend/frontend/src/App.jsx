import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginIn from './LoginIn';
import SignUp from './SignUp';
import StudentDashboard from './StudentDashboard';
import FacultyDashboard from './FacultyDashboard';
import AdminDashboard from './AdminDashboard';



function App() {
  return (
    <>
   
      <Router>
        <Routes>
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<LoginIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        </Routes>

      </Router>
    

    </>
  );
}

export default App;
