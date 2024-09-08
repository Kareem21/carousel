import React from 'react';
import '../styles/Events.css';

const Events = () => (
    <div className="events-page">
        <section>
            <h1>Carousel World invites you to book our vintage animals for your next event.</h1>
            <p>Whether it's a charity event, a private event or a large scale event, our horses are an excellent addition.</p>
        </section>

        <section className="event-types">
            <div className="event-card">
                <img src="../../public/Aboutus/carouselrandom.jpg" alt="Carver 3"/>
                <h3>Private events</h3>
                <p>Book our animals for your private event.</p>
            </div>
            <div className="event-card">
                <img src="../../public/Aboutus/carouselrandom.jpg" alt="Carver 3"/>
                <h3>Commercials</h3>
                <p>Book our animals for your commercial shoot.</p>
            </div>
            <div className="event-card">
                <img src="../../public/Aboutus/carouselrandom.jpg" alt="Carver 3"/>
                <h3>Corporate or Charity events</h3>
                <p>Book our animals for your corporate or charity event.</p>
            </div>
        </section>

        <section className="past-events">
            <h2>Past Events</h2>
            <div className="event-highlight">
                <img src="../../public/Aboutus/carouselrandom.jpg" alt="Carver 3"/>
                <p>Our collection displayed at the 2014 "Holidays at the White house" event. 4 deer were used in the East room of the White house.</p>
            </div>
        </section>

        <section className="unique-experience">
            <p>Including our animals at your events turns it into an experience like no other and creates a feel that is hard to replicate.</p>
        </section>

        <section className="commercials">
            <h2>Commercials</h2>
            <p>Our carousel animals can be displayed in your commercials, private or public events, or other causes.</p>
            <div className="video-container">
                {/* Replace with actual video embed code */}
                <iframe src="https://www.youtube.com/embed/hQf578gNueg?si=xyBu-GCHiPcln21c" title="LG Vortex - Carousel Commercial 2011" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>

        <section className="schedule-call">
            <p>All the animals on our website can be part of your event or for other commercial uses. For more information schedule a call below.</p>
            {/* Replace with actual scheduling component or embed code */}
            <div className="scheduler-embed">
                {/* Scheduler embed code goes here */}
            </div>
        </section>

    </div>
);

export default Events;