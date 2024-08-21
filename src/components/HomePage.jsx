import React from 'react';
import '../styles/HomePage.css';
import "@fontsource/great-vibes";
import CarouselFlow from '../components/CarouselFlow';

const carouselItems = [
    { image: '/Dentzel/D20.png' },
    { image: '/Dentzel/D20.png' },
    { name: 'Randomname', image: '/Dentzel/D1.png' },
    { name: 'Foreign', image: '/Dentzel/D3(1).png' },
    { name: 'tesfg', image: '/Dentzel/D5(1).png' },
    { name: 'tdfsfg', image: '/Aboutus/carvers2.jpg' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'daf', image: '/Dentzel/D9.png' },
    { name: 'adfd', image: '/Dentzel/D10(1).png' },
    { name: 'fsgssf', image: '/Dentzel/D13(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'fsgssf', image: '/Dentzel/D13(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(1).png' },
    { name: 'gfsgf', image: '/Dentzel/D15(2).png' },
    { name: 'dhjdjh', image: '/Dentzel/D21.png' },
    { name: 'gfsgfsg', image: '/Dentzel/D23.png' },
    { name: 'gfsgs', image: '/Dentzel/D27(1).png' },
];

const HomePage = () => (
    <div className="page-content">
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">A Fine Art Collection</h1>
            </section>

            <section className="carousel-section">
                <CarouselFlow imageData={carouselItems.map(item => item.image)}/>
            </section>

            <section className="tagline-section">
                <p className="tagline">Each item on our site is one of one.</p>
            </section>

            <section className="content">
                <h2 className="content-heading">Timeless Carousel Horses, Rare Antiques, and Fine Paintings</h2>
                <div className="content-grid">
                    <p className="content-paragraph">
                        Welcome to Carousel World, a curated haven of meticulously restored carousel animals and fine
                        art pieces. Our passion for preserving these whimsical treasures has led us to amass an
                        exquisite array of vintage carousel horses, rare antiques, and captivating paintings that embody
                        the nostalgia and charm of a bygone era.
                    </p>
                    <p className="content-paragraph">
                        The collectible animals in our esteemed collection have been cherished by our family for
                        generations. Each piece in our gallery is a unique, one-of-a-kind treasure, waiting to become
                        the centerpiece of your distinguished collection.
                    </p>
                    <p className="content-paragraph">
                        Every item tells a story of unparalleled craftsmanship, artistic vision, and the joyous spirit
                        of generations past. Whether you're a discerning collector, an aficionado of Americana, or
                        seeking a truly exceptional piece of history, Carousel World invites you to explore our magical
                        menagerie and find your own piece of carousel artistry.
                    </p>
                </div>
                <a href="/collection" className="cta-button">Explore Our Curated Collection</a>
            </section>

            <section className="carvers-section">
                <h2 className="carvers-heading">Our carousel animals are masterfully crafted by the world's most
                    renowned artisans</h2>
                <div className="carvers-links">
                    <a href="/carvers/loof">Charles I.D. Loof</a>
                    <a href="/carvers/spillman">Herschell Spillman Co.</a>
                    <a href="/carvers/mueller">Mueller Brothers</a>
                    <a href="/carvers/dentzel">Dentzel</a>
                    <a href="/carvers/foreign">International Masters</a>
                </div>
                <div className="carvers-images">
                    <img src="../../public/Aboutus/carvers2.jpg" alt="Master Carver 1"/>
                    <img src="../../public/Aboutus/carvers3.jpg" alt="Master Carver 2"/>
                    <img src="../../public/Aboutus/carouselrandom.jpg" alt="Master Carver 3"/>
                    <img src="../../public/Aboutus/carvers2.jpg" alt="Master Carver 4"/>
                </div>
            </section>
        </div>
    </div>
);

export default HomePage;