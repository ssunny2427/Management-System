import React from 'react';
import './css/Dashboard.css';

function AdminDashboard() {
    const adminName = localStorage.getItem('userName');

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome to the Admin Dashboard</h1>
            </div>
            <div className="dashboard-content">
                <h2 className="welcome-message">Welcome, {adminName}!</h2>
                <p>This is your administrator dashboard.</p>
                <button className="dashboard-button">Manage Users</button>
            </div>
        </div>
    );
}

export default AdminDashboard;
