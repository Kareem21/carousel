import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage';
import Layout from './components/Layout';
import Misc from './components/Misc';
import Collection from './components/Collection';
import Contact from './components/Contact.jsx';
import Events from './components/Events';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

import Dentzel from './Shop/Dentzel.jsx';
import Stein from './Shop/Stein.jsx';
import Looff from './Shop/Looff.jsx';
import Illions from './Shop/Illions.jsx';
import Carmel from './Shop/Carmel.jsx';
import Mueller from './Shop/Mueller.jsx';
import Parker from './Shop/Parker.jsx';
import PTC from './Shop/PTC.jsx';
import HerschellSpillman from './Shop/hs.jsx';
import Foreign from './Shop/Foreign.jsx';


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
                    <Route path="/stein-and-goldstein" element={<Stein/>} />
                    <Route path="/looff" element={<Looff />} />
                    <Route path="/illions" element={<Illions />} />
                    <Route path="/carmel" element={<Carmel />} />
                    <Route path="/mueller" element={<Mueller />} />
                    <Route path="/parker" element={<Parker />} />
                    <Route path="/ptc" element={<PTC />} />
                    <Route path="/herschell-spillman" element={<HerschellSpillman />} />
                    <Route path="/Foreign" element={<Foreign/>} />


                    <Route path="/contact" element={<Contact/>} />


                    {/* Add more routes as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;