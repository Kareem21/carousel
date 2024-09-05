import React, { useEffect } from 'react';
import "../styles/HomePage.css";
import "@fontsource/great-vibes";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
    { text: "This collection SLAPSSSS FR FR ", author: "Shelby", rating: 5 },
    { text: " ANTIQUECAROUSELS.COM COULD NEVER ", author: "Mike hawk", rating: 5 },
    { text: "I LOVE BIG CAROUSELS AND I CANNOT LIE", author: "Julius Seizure", rating: 5 },
    { text: "Muellers #1 FAN!!!!! ugh hes so good  ", author: "MUellerlover32", rating: 5 },
];

const carouselItems = [
    { name: 'Randomname', image: '/Dentzel/D1.png' },
    { name: 'Foreign', image: '/Dentzel/D3(1).png' },
    { name: 'tesfg', image: '/Dentzel/D5(1).png' },
    { name: 'tdfsfg', image: '/Aboutus/carvers2.jpg' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
    { name: 'daf', image: '/Dentzel/D9.png' },
    { name: 'tesvccvfg', image: '/Dentzel/D7.png' },
];

const HomePage = () => {

    useEffect(() => {
        let startX = 0;
        let startY = 0;

        const handleTouchStart = (event) => {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        };

        const handleTouchMove = (event) => {
            const moveX = event.touches[0].clientX - startX;
            const moveY = event.touches[0].clientY - startY;

            // If horizontal swipe is greater than vertical, prevent default scroll behavior
            if (Math.abs(moveX) > Math.abs(moveY)) {
                event.preventDefault();
            }
        };

        // Attach event listeners
        const carousel = document.querySelector(".testimonials-section");
        carousel.addEventListener("touchstart", handleTouchStart);
        carousel.addEventListener("touchmove", handleTouchMove);

        // Clean up event listeners on component unmount
        return () => {
            carousel.removeEventListener("touchstart", handleTouchStart);
            carousel.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <div className="page-content">
            <div className="home-container">
                <div className="full-width-banner">
                    <section className="banner-section">
                        <div className="banner-text-container">
                            <h2 className="banner-title">Vintage Carousel Horses, Antiques, Paintings.</h2>
                        </div>
                        <div className="banner">
                            {carouselItems.map((item, index) => (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    key={index}
                                    className="banner-image"
                                    style={{"--i": index}} // Assign the index as a CSS variable
                                />
                            ))}
                        </div>
                        <a href="/collection" className="banner-link">View our full collection here</a>
                    </section>
                </div>

                <section className="tagline-section">
                    <p className="tagline">Each item on our site is one of one.</p>
                </section>

                <section className="content">
                    <h2 className="content-heading">Timeless Carousel Horses, Rare Antiques, and Fine Paintings</h2>
                    <div className="content-grid">
                        <p className="content-paragraph">
                            Welcome to Carousel World, a curated haven of meticulously restored carousel animals and fine
                            art pieces...
                        </p>
                        <p className="content-paragraph">
                            The collectible animals in our esteemed collection have been cherished by our family for
                            generations...
                        </p>
                        <p className="content-paragraph">
                            Every item tells a story of unparalleled craftsmanship, artistic vision, and the joyous
                            spirit of generations past...
                        </p>
                    </div>
                    <a href="/collection" className="cta-button">Explore Our Curated Collection</a>
                </section>

                <section className="cards-section">
                    <div className="card about-us-card">
                        <h2>ABOUT US</h2>
                        <p> GET TO KNOW US</p>
                        <div className="portraits">
                            <div className="portrait"></div>
                            <div className="portrait"></div>
                            <div className="portrait"></div>
                        </div>
                        <button className="about-us-button">ABOUT US</button>
                    </div>
                    <div className="card shop-card">
                        <h2>SHOP</h2>
                        <h3>GO HAVE A LOOK</h3>
                        <img src={"http://whatsintheoldbox.com/images/wallet-global.svg"} alt="Shop Icon" />
                        <button className="shop-button">Our Collection</button>
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
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className={i < testimonial.rating ? 'star-filled' : 'star-empty'} />
                                    ))}
                                </div>
                                <p>"{testimonial.text}"</p>
                                <p className="testimonial-author">- {testimonial.author}</p>
                            </div>
                        ))}
                    </Carousel>
                </section>

                <section className="carvers-section">
                    <h2 className="carvers-heading">Our carousel animals are masterfully crafted by the world's most
                        renowned artisans</h2>
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
        </div>
    );
};

export default HomePage;
