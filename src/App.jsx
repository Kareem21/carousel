import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx'; //
import AboutPage from './components/AboutPage';
import Layout from './components/Layout'; //
import Events from './components/Events';
import './styles/App.css';


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events" element={<Events />} />

                    <Route path="/collection/dentzel" element={<AboutPage />} />
                    <Route path="/collection/stein-and-goldstein" element={<AboutPage />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
