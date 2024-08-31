import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cateogry.css';

const horses = [
    { name: "Dentzel Horse 1", description: "Beautiful jumping horse", price: 15000, image: "/path/to/dentzel-horse1.jpg" },
    { name: "Dentzel Horse 2", description: "Elegant standing horse", price: 18000, image: "/path/to/dentzel-horse2.jpg" },
];

const timelineEvents = [
    { year: 1860, event: "Gustav Dentzel immigrates to America" },
    { year: 1867, event: "Dentzel begins carousel manufacturing" },
    { year: 1909, event: "Production peaks with advanced carving techniques" },
    { year: 1928, event: "Dentzel Carousel Company closes" },
    // ... add more events as needed
];

const Dentzel = () => (
    <div className="maker-page">
        <h1 className="maker-title">Dentzel Carousel Horses</h1>
        <div className="maker-content">
            <div className="horse-grid">
                {horses.map((horse, index) => (
                    <div key={index} className="horse-card">
                        <img src={horse.image} alt={horse.name} className="horse-image" />
                        <h2>{horse.name}</h2>
                        <p>{horse.description}</p>
                        <p className="horse-price">${horse.price.toLocaleString()}</p>
                        <Link to="/contact" className="inquire-button">Inquire</Link>
                    </div>
                ))}
            </div>
            <div className="timeline">
                <h2>Dentzel History</h2>
                {timelineEvents.map((event, index) => (
                    <div key={index} className="timeline-event">
                        <span className="timeline-year">{event.year}</span>
                        <p className="timeline-description">{event.event}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Dentzel;
