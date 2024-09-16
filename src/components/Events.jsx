import React from 'react';
import { Calendar, Video, Users } from 'lucide-react';
import '../styles/Events.css';

const Events = () => {
    const eventTypes = [
        { icon: <Users size={48} />, title: 'Private Events', description: 'Book our animals for your private event.' },
        { icon: <Video size={48} />, title: 'Commercials', description: 'Book our animals for your commercial shoot.' },
        { icon: <Calendar size={48} />, title: 'Corporate or Charity Events', description: 'Book our animals for your corporate or charity event.' },
    ];

    return (
        <div className="events-page">
            <section className="hero">
                <div className="container">
                    <h1>Book Our Vintage Carousel Animals for Your Next Event</h1>
                    <p>Transform your event into an unforgettable experience with our unique carousel animals.</p>
                </div>
            </section>

            <section className="event-types">
                <div className="container">
                    <h2>Event Types</h2>
                    <div className="event-cards">
                        {eventTypes.map((event, index) => (
                            <div key={index} className="event-card">
                                <div className="event-card-icon">{event.icon}</div>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="past-events">
                <div className="container">
                    <h2>Past Events</h2>
                    <div className="event-highlight">
                        <img src="/Aboutus/carouselrandom.jpg" alt="Carousel animals at the White House" />
                        <div className="event-highlight-content">
                            <h3>Holidays at the White House</h3>
                            <p>Our collection was proudly displayed at the 2014 "Holidays at the White House" event. Four of our exquisite deer were featured in the East Room, adding a touch of vintage charm to the festive decorations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="unique-experience">
                <div className="container">
                    <h2>A Unique Experience</h2>
                    <p>Including our animals at your events creates an atmosphere that's hard to replicate. Our vintage carousel pieces add a touch of nostalgia and wonder, turning any occasion into a magical experience.</p>
                </div>
            </section>

            <section className="commercials">
                <div className="container">
                    <h2>Featured in Commercials</h2>
                    <p>Our carousel animals have starred in various commercial productions, adding a whimsical and nostalgic touch to brand storytelling.</p>
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/hQf578gNueg?si=xyBu-GCHiPcln21c"
                            title="LG Vortex - Carousel Commercial 2011"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Ready to Make Your Event Unforgettable?</h2>
                    <p>All the animals on our website can be part of your event or for other commercial uses. Schedule a call with us to discuss how we can bring a touch of vintage magic to your next occasion.</p>
                    <a href="/contact" className="btn-primary">Schedule a Call</a>
                </div>
            </section>
        </div>
    );
};

export default Events;