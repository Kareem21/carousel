import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from './Header';
import '../styles/Collection.css';

const collectionItems = [
    { title: 'Dentzel', description: 'Our Animals that are carved by Dentzel', image: '/path/to/carousel-image.jpg' },
    { title: 'Stein and Goldstein', description: 'Our Animals that are carved by Dentzel', image: '/path/to/carousel-image.jpg' },
    { title: 'Looff', description: '19th Century heavy carved wood plaque figures', image: '/path/to/carousel-image.jpg' },
    { title: 'Carmel', description: 'Our Animals that are carved by Dentzel', image: '/path/to/carousel-image.jpg' },
    { title: 'Mueller', description: 'Our collection includes sports memorabilia, coming soon.', image: '/path/to/carousel-image.jpg' },
    { title: 'Parker', description: 'Our Animals that are carved by Dentzel', image: '/path/to/carousel-image.jpg' },
    { title: 'PTC', description: 'Our Animals that are carved by Dentzel', image: '/path/to/carousel-image.jpg' },
    { title: 'Herschell Spillman', description: 'Our Animals that are carved by Dentzel', image: '/path/to/carousel-image.jpg' },

];

const testimonials = [
    { text: "The Steyen collection is truly magnificent!", author: "John Doe" },
    { text: "I've never seen such beautifully restored pieces.", author: "Jane Smith" },
    { text: "A must-visit for any carousel enthusiast.", author: "Mike Johnson" },
];

const timelineEvents = [
    { year: 1880, event: "Steyen begins crafting carousels" },
    { year: 1900, event: "Introduction of the famous Steyen horse design" },
    { year: 1925, event: "Steyen carousels become popular across America" },
    { year: 1950, event: "Last original Steyen carousel produced" },
    { year: 1980, event: "Restoration of Steyen carousels begins" },
    { year: 2000, event: "Steyen collection recognized as national treasure" },
];

const Collection = () => (
    <div className="collection-page">
        <main className="collection-content">
            <h1 className="collection-title">Our Full Collection</h1>
            <p className="collection-subtitle">Explore our vintage Carousel horse collection.</p>

            <div className="carnival-booths">
                {collectionItems.map((item, index) => (
                    <div key={index} className="carnival-booth">
                        <div className="booth-awning"></div>
                        <div className="booth-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <img src={item.image} alt={item.title} className="booth-image" />
                        </div>
                    </div>
                ))}
            </div>

            <section className="testimonials-section">
                <h2>What Our Visitors Say</h2>
                <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-ticket">
                            <p>"{testimonial.text}"</p>
                            <p className="testimonial-author">- {testimonial.author}</p>
                        </div>
                    ))}
                </Carousel>
            </section>

            <section className="timeline-section">
                <h2>The Magical History of Steyen Carousels</h2>
                <div className="timeline">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="timeline-event">
                            <div className="timeline-year">{event.year}</div>
                            <div className="timeline-description">{event.event}</div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
);

export default Collection;