'use client';

import React, { useEffect, useRef, useState } from 'react';
import "../styles/HomePage.css";
import "@fontsource/great-vibes";
import { Link } from 'react-router-dom';

const carouselItems = [
    { name: 'Randomname', image: '/Dentzel/D1.png' },
    { name: 'Foreign', image: '/Stein/SG1.png' },
    { name: 'tesfg', image: '/Looff/L3.JPG' },
    { name: 'tdfsfg', image: '/PTC/PTC2.JPG' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'daf', image: '/Dentzel/D9.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
];

const timelineEvents = [
    { year: 1972, event: "Charlotte Dinger makes her first purchase of a carousel horse from an antique store in Philadelphia." },
    { year: 1973, event: "Dinger begins restoring carousel horses, starting with a small wooden horse." },
    { year: 1975, event: "Discovers a trove of two dozen carousel horses in a Philadelphia warehouse." },
    { year: 1980, event: "Puts together a traveling exhibition that is displayed at museums across the country." },
    { year: 1985, event: "Becomes a consultant to Sotheby's and publishes 'ART OF THE CAROUSEL'." },
    { year: 1996, event: "Charlotte Dinger passes away, but her collection continues to be showcased across the nation." },
    { year: 2000, event: "Her collection is featured in various traveling shows, maintaining her legacy." },
    { year: 2024, event: "Our family brings you the full collection, here at Carouselworld.com" }
];

const testimonials = [
    {
        text: "We were very pleased with our S&G piece from Carousel world. Their entire process including communication, delivery and . Not only is the design visually appealing, but the functionality is also seamless, providing an excellent user experience. Throughout the process, we were very happy with their professionalism and responsiveness. Would highly recommend Blue Beetle to anyone seeking web development services. Thank you to Danielle, Jessika, Daniella and Mark.",
        author: "fiesty",
    },
    {
        text: "Blue Beetle team has significantly contributed to the hotel's success by enhancing our digital presence. They have played a crucial role in optimizing the website and improving our SEO performance. Additionally, Blue Beetle has been instrumental in resolving various issues, including those related to the Google revenue platform. Kudos to Jessika, Ridum, Daniella and Marno.",
        author: "Beneli Sari",
        position: "Marketing Manager",
        company: "mysk"
    }
];

const HomePage = () => {
    const bannerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const banner = bannerRef.current;
        if (banner) {
            const scrollWidth = banner.scrollWidth / 2;
            const animationDuration = scrollWidth / 50;
            banner.style.setProperty('--scroll-width', `${scrollWidth}px`);
            banner.style.setProperty('--animation-duration', `${animationDuration}s`);
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const TimelineSection = () => (
        <section className="timeline-section">
            <h2>The Legacy of Charlotte Dinger</h2>
            <div className="timeline">
                {timelineEvents.map((event, index) => (
                    <div key={index} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <div className="timeline-year">{event.year}</div>
                            <div className="timeline-description">{event.event}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="page-content">
            <div className="home-container">
                <div className="full-width-banner">
                    <section className="banner-section">
                        <div className="banner-text-container">
                            <h2 className="banner-title">Vintage Carousel Horses, Antiques, Paintings.</h2>
                        </div>
                        <div className="banner-wrapper">
                            <div className="banner" ref={bannerRef}>
                                {[...carouselItems, ...carouselItems].map((item, index) => (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        key={index}
                                        className="banner-image"
                                        style={{ "--i": index % carouselItems.length }}
                                    />
                                ))}
                            </div>
                        </div>
                        <a href="/collection" className="banner-link">
                            View our full collection here
                        </a>
                    </section>
                </div>

                <div className="content-timeline-container">
                    <div className="content-cards-container">
                        <section className="content">
                            <h2 className="content-heading">Timeless Carousel Horses, Rare Antiques, and Fine Paintings</h2>
                            <div className="content-grid">
                                <p className="content-paragraph">Welcome to Carousel World, a curated haven of meticulously restored carousel animals and fine art pieces...</p>
                                <p className="content-paragraph">The collectible animals in our esteemed collection have been cherished by our family for generations...</p>
                                <p className="content-paragraph">Every item tells a story of unparalleled craftsmanship, artistic vision, and the joyous spirit of generations past...</p>
                            </div>
                            <a href="/collection" className="cta-button">Explore Our Curated Collection</a>
                        </section>


                        <section className="tagline-section">
                            <p className="tagline">Each item on our site is one of one.</p>
                            <p className="tagline-subtext">Discover unique pieces that can't be found anywhere else.</p>
                        </section>

                        <section className="cards-section">
                            <div className="card about-us-card">
                                <h2>ABOUT US</h2>
                                <p>GET TO KNOW US</p>
                                <div className="portraits">
                                    <img src="/Rand/1.jpg" alt="Portrait 1" className="portrait" />
                                    <img src="/Rand/2.jpg" alt="Portrait 2" className="portrait" />
                                    <img src="/Rand/3.jpg" alt="Portrait 3" className="portrait" />
                                </div>
                                <Link to="/about" className="card-button about-us-button">ABOUT US</Link>
                            </div>
                            <div className="card shop-card">
                                <h2>SHOP</h2>
                                <h3>GO HAVE A LOOK</h3>
                                <img
                                    src="/wallet.svg"
                                    alt="Shop Icon"
                                    className="shop-icon"
                                />
                                <Link to="/collection" className="card-button shop-button">View Collection</Link>
                            </div>
                        </section>

                        <section className="testimonials-section">
                            <h2>What Our Customers Say</h2>
                            <p className="testimonials-description">
                                Dive into the glowing endorsements from our customers, who've
                                enjoyed items from our collection.
                            </p>
                            <div className="testimonials-grid">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="testimonial-card">
                                        <div className="testimonial-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="star">★</span>
                                            ))}
                                        </div>
                                        <p className="testimonial-text">{testimonial.text}</p>
                                        <div className="testimonial-author">
                                            <p className="author-name">{testimonial.author}</p>
                                            <p className="author-position">{testimonial.position}</p>
                                            <p className="author-company">{testimonial.company}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="carvers-section">
                            <h2 className="carvers-heading">Our carousel animals are masterfully crafted by the world's most renowned artisans</h2>
                            <div className="carvers-links">
                                <span>Charles I.D. Loof</span>
                                <span>Herschell Spillman Co.</span>
                                <span>Mueller Brothers</span>
                                <span>Dentzel</span>
                                <span>International Masters</span>
                            </div>
                            <div className="carvers-images">
                                <img src="/Aboutus/carvers2.jpg" alt="Master Carver 1" />
                                <img src="/Aboutus/carvers3.jpg" alt="Master Carver 2" />
                                <img src="/Aboutus/carouselrandom.jpg" alt="Master Carver 3" />
                                <img src="/Aboutus/carvers2.jpg" alt="Master Carver 4" />
                            </div>
                        </section>
                    </div>

                    {!isMobile && <TimelineSection />}
                </div>
            </div>
        </div>
    );
};

export default HomePage;