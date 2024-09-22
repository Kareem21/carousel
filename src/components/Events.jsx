import React from 'react';
import { Calendar, Video, Users } from 'lucide-react';
import '../styles/Events.css';

export default function Events() {
    const eventTypes = [
        { icon: <Users size={48} color="#ffffff" />, title: 'Private Events', description: 'Book our animals for your private event.' },
        { icon: <Video size={48} color="#ffffff" />, title: 'Commercials', description: 'Book our animals for your commercial shoot.' },
        { icon: <Calendar size={48} color="#ffffff" />, title: 'Corporate or Charity Events', description: 'Book our animals for your corporate or charity event.' },
    ];

    return (
        <div className="events-page">
            <section className="hero">
                <div className="container">
                    <h1>Elevate Your Event with Vintage Carousel Animals</h1>
                    <p>Create unforgettable memories with our unique carousel pieces</p>
                </div>
            </section>

            <section className="event-types">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
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
                    <h2 className="section-title">Featured Event</h2>
                    <div className="event-highlight">
                        <img src="/Aboutus/whitehousedisplay.jpg" alt="Carousel animals at the White House" />
                        <div className="event-highlight-content">
                            <h3>Holidays at the White House</h3>
                            <p>Our collection graced the 2014 "Holidays at the White House" event. Four of our exquisite deer adorned the East Room, bringing vintage charm to the festive decorations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="unique-experience">
                <div className="container">
                    <h2 className="section-title">A Touch of Nostalgia</h2>
                    <p>Our vintage carousel pieces add a magical atmosphere to any event, creating an experience that's truly one-of-a-kind.</p>
                </div>
            </section>

            <section className="commercials">
                <div className="container">
                    <h2 className="section-title">As Seen On Screen</h2>
                    <p>Our carousel animals have starred in various commercial productions, adding whimsy and nostalgia to brand storytelling.</p>
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
                    <h2 className="section-title">Ready to Make Magic?</h2>
                    <p>All our carousel animals are available for your events and commercial uses. Let's discuss how we can bring vintage charm to your next occasion.</p>
                    <a href="/contact" className="btn-primary">Contact us </a>
                </div>
            </section>
        </div>
    );
}