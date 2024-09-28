import React, { useState } from 'react';
import './css/Dashboard.css';

function StudentDashboard() {
    const studentName = localStorage.getItem('userName');
    const [courses, setCourses] = useState([]);
    const [showCourses, setShowCourses] = useState(false);

    const randomCourses = [
        "Introduction to Computer Science",
        "Data Structures and Algorithms",
        "Web Development Basics",
        "Database Management Systems",
        
    ];

    const handleViewCourses = () => {
        const randomCourseList = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * randomCourses.length);
            randomCourseList.push(randomCourses[randomIndex]);
        }
        setCourses(randomCourseList);
        setShowCourses(true);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome to the Student Dashboard</h1>
            </div>
            <div className="dashboard-content">
                <h2 className="welcome-message">Welcome, {studentName}!</h2>
                <p>This is your student dashboard.</p>
                
                <button className="dashboard-button" onClick={handleViewCourses}>
                    View Courses
                </button>
                <br />
                <br />
                {showCourses && (
                    <div className="course-list">
                        
                        <ul>
                            {courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudentDashboard;
