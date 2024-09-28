import React, { useState } from 'react';
import './css/Dashboard.css';

function FacultyDashboard() {
    const facultyName = localStorage.getItem('userName');
    const [classTimings, setClassTimings] = useState([]);
    const [showTimings, setShowTimings] = useState(false);

    const generateRandomTimings = () => {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const timings = [];

        days.forEach(day => {
            const startHour = Math.floor(Math.random() * 5) + 8;
            const startMinute = Math.floor(Math.random() * 60);
            const classDuration = Math.floor(Math.random() * 2) + 1;
            const endHour = startHour + classDuration;
            const endTime = endHour >= 12 ? 'PM' : 'AM';
            const adjustedEndHour = endHour > 12 ? endHour - 12 : endHour;

            const startTime = `${startHour % 12 || 12}:${String(startMinute).padStart(2, '0')} ${startHour >= 12 ? 'PM' : 'AM'}`;
            const endTimeFormatted = `${adjustedEndHour}:${String(startMinute).padStart(2, '0')} ${endTime}`;

            timings.push({ day, time: `${startTime} - ${endTimeFormatted}` });
        });

        setClassTimings(timings);
        setShowTimings(true);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome to the Faculty Dashboard</h1>
            </div>
            <div className="dashboard-content">
                <h2 className="welcome-message">Welcome, {facultyName}!</h2>
                <p>This is your faculty dashboard.</p>
                <button className="dashboard-button" onClick={generateRandomTimings}>
                    View Class Timings
                </button>
                <br />
                <br />
                {showTimings && (
                    <div className="class-timings-list">
                        <h3>Your Class Timings:</h3>
                        <ul>
                            {classTimings.map((timing, index) => (
                                <li key={index}>
                                    {timing.day}: {timing.time}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FacultyDashboard;
