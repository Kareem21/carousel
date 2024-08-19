import React from 'react';
import '../styles/HomePage.css'; // Import your global stylesheet
import '../styles/CarverSection.css'; // Import your global stylesheet

import ThreeDCarousel from './ThreeDCarousel';

const carouselItems = [
    { name: 'Stein and Goldstein', image: '/Dentzel/D20.png' },
    { name: 'Carmel', image: '/Dentzel/D20.png' },
    { name: 'Dentzel', image: '/Dentzel/D20.png' },
    { name: 'Misc', image: '/Dentzel/D20.png' },
    { name: 'Randomname', image: '/Dentzel/D21.png' },
    { name: 'Foreign', image: '/Dentzel/D22.png' },
    // Add more horses here
];

const HomePage = () => (
    <div className=".home-container">
        <div className="carvers-section">
            <h1 className="main-heading">A Fine Art Collection</h1>
            <h2 className="sub-heading">Preserving the Magic of Vintage Carousels</h2>
        </div>
        <ThreeDCarousel items={carouselItems}/>

        <div className="content">
            <h2 className="content-heading">Vintage Carousel Horses, Antiques, and Paintings</h2>
            <p className="content-paragraph">
                Welcome to Carousel World, a unique collection of meticulously restored carousel animals and fine art
                pieces. Our passion for preserving these whimsical treasures of the past has led us to curate an
                exquisite array of vintage carousel horses, rare antiques, and captivating paintings that capture the
                nostalgia and charm of a bygone era.



            </p>
            <p className="content-paragraph">
                The collectible animals in our collection have been with our family for multiple generations. All the antiques on our website are one of one.

            </p>
            <p className="content-paragraph">
                Each piece in our collection tells a story of craftsmanship, artistry, and the joy of generations past.
                Whether you're a dedicated collector, an enthusiast of Americana, or someone looking for a truly special
                piece of history, Carousel World invites you to explore our magical menagerie.
            </p>
            <a href="/collection" className="cta-button">Explore Our Collection</a>
        </div>

        {/* New Vintage Carvers Section */}
        <div className="carvers-section">
            <h2 className="carvers-heading">Our carousel animals are handcrafted by the world's most notorious
                carvers.</h2>
            <div className="carvers-links">
                <a href="/carvers/loof">Charles I.D. Loof</a> |
                <a href="/carvers/spillman">Herschell Spillman Co.</a> |
                <a href="/carvers/mueller">Mueller Brothers</a> |
                <a href="/carvers/dentzel">Dentzel</a> |
                <a href="/carvers/foreign">Foreign Carvers</a>
            </div>
            <div className="carvers-images">
                <img src="../../public/Aboutus/carvers2.jpg" alt="Carver 1"/>
                <img src="../../public/Aboutus/carvers3.jpg" alt="Carver 2"/>
                <img src="../../public/Aboutus/carouselrandom.jpg" alt="Carver 3"/>
                <img src="../../public/Aboutus/carvers2.jpg" alt="Carver 4"/>
            </div>
        </div>

    </div>
);

export default HomePage;
