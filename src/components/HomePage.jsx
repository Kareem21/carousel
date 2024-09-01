import React from 'react';
import '../styles/HomePage.css';
import "@fontsource/great-vibes";
import CarouselFlow from '../components/CarouselFlow';
import ThreeDCarousel from "./ThreeDCarousel.jsx";
import {Carousel} from "react-responsive-carousel";
import { motion } from 'framer-motion';

const timelineEvents = [
    { year: 1972, event: "Charlotte Dinger makes her first purchase of a carousel horse from an antique store in Philadelphia." },
    { year: 1973, event: "Dinger begins restoring carousel horses, starting with a small wooden horse." },
    { year: 1975, event: "Discovers a trove of two dozen carousel horses in a Philadelphia warehouse." },
    { year: 1980, event: "Founding of the American Carousel Society to promote and preserve carousel art." },
    { year: 1983, event: "Dinger becomes a consultant for Sotheby's and starts her own publishing company." },
    { year: 1984, event: "The definitive coffee table book 'ART OF THE CAROUSEL' is published." },
    { year: 1985, event: "Her collection is featured in a traveling exhibition displayed at museums nationwide." },
    { year: 1994, event: "The United States Postal Service uses Dinger's collection for a commemorative stamp issue." },
    { year: 1996, event: "Charlotte Dinger passes away, leaving behind a legacy of carousel art and preservation." },
    { year: 1997, event: "Dinger's collection continues to be showcased in various traveling shows across the nation." },
];


const testimonials = [
    { text: "This collection SLAPSSSS FR FR ", author: "Chriss P.Ratt" },
    { text: " ANTIQUECAROUSELS.COM COULD NEVER ", author: "Mike hawk" },
    { text: "I LOVE BIG CAROUSELS AND I CANNOT LIE", author: "Julius Seizure" },
];
const carouselItems = [
    { name: 'Randomname', image: '/Dentzel/D1.png' },
    { name: 'Foreign', image: '/Dentzel/D3(1).png' },
    { name: 'tesfg', image: '/Dentzel/D5(1).png' },
    { name: 'tdfsfg', image: '/Aboutus/carvers2.jpg' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'daf', image: '/Dentzel/D9.png' },
    { name: 'gfsgfsg', image: '/Dentzel/D23.png' },
    { name: 'gfsgs', image: '/Dentzel/D27(1).png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },

    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },

    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },

];
const HomePage = () => (
    <div className="page-content">
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">A Fine Art Collection</h1>
            </section>
            <section className="carousel-section">
                <CarouselFlow imageData={carouselItems.map(item => item.image)} />
            </section>

            <section className="tagline-section">
                <p className="tagline">Each item on our site is one of one.</p>
            </section>

            <section className="timeline-section">
                <h2>The Legacy of Charlotte Dinger</h2>
                <div className="timeline">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="timeline-event">
                            <div className="timeline-year">{event.year}</div>
                            <div className="timeline-description">{event.event}</div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="testimonials-section">
                <h2>What Our Visitors Say</h2>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-ticket">
                            <p>"{testimonial.text}"</p>
                            <p className="testimonial-author">- {testimonial.author}</p>
                        </div>
                    ))}
                </Carousel>
            </section>
            <section className="content">
                <h2 className="content-heading">Timeless Carousel Horses, Rare Antiques, and Fine Paintings</h2>
                <div className="content-grid">
                    <p className="content-paragraph">
                        Welcome to Carousel World, a curated haven of meticulously restored carousel animals and fine art pieces...
                    </p>
                    <p className="content-paragraph">
                        The collectible animals in our esteemed collection have been cherished by our family for generations...
                    </p>
                    <p className="content-paragraph">
                        Every item tells a story of unparalleled craftsmanship, artistic vision, and the joyous spirit of generations past...
                    </p>
                </div>
                <a href="/collection" className="cta-button">Explore Our Curated Collection</a>
            </section>

            <div>
                <ThreeDCarousel items={carouselItems} />
            </div>
            <section className="carvers-section">
                <h2 className="carvers-heading">Our carousel animals are masterfully crafted by the world's most renowned artisans</h2>
                <div className="carvers-links">
                    <a href="/carvers/loof">Charles I.D. Loof</a>
                    <a href="/carvers/spillman">Herschell Spillman Co.</a>
                    <a href="/carvers/mueller">Mueller Brothers</a>
                    <a href="/carvers/dentzel">Dentzel</a>
                    <a href="/carvers/foreign">International Masters</a>
                </div>
                <div className="carvers-images">
                    <img src="../../public/Aboutus/carvers2.jpg" alt="Master Carver 1" />
                    <img src="../../public/Aboutus/carvers3.jpg" alt="Master Carver 2" />
                    <img src="../../public/Aboutus/carouselrandom.jpg" alt="Master Carver 3" />
                    <img src="../../public/Aboutus/carvers2.jpg" alt="Master Carver 4" />
                </div>
            </section>
        </div>
    </div>
);

export default HomePage;