import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage';
import Layout from './components/Layout';
import Misc from './components/Misc';
import Dentzel from './Shop/Dentzel.jsx';
import Collection from './components/Collection';
import Foreign from './Shop/Foreign.jsx';
import Contact from './components/Contact.jsx';

import Events from './components/Events';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import './styles/App.css';

function App() {
    return (
        <Router>
            <ScrollToTop /> {/* Add this line */}
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/misc" element={<Misc />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/Dentzel" element={<Dentzel/>} />
                    <Route path="/Foreign" element={<Foreign/>} />
                    <Route path="/contact" element={<Contact/>} />

                    <Route path="/collection/dentzel" element={<AboutPage />} />
                    <Route path="/collection/stein-and-goldstein" element={<AboutPage />} />
                    <Route path="/collection/dentzel" element={<AboutPage />} />

                    {/* Add more routes as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;