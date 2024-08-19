import React, { useState } from 'react';
import '../styles/ThreeDCarousel.css';

const ThreeDCarousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemAngle = 360 / items.length;

    const handleNext = () => setActiveIndex((activeIndex + 1) % items.length);
    const handlePrev = () => setActiveIndex((activeIndex - 1 + items.length) % items.length);

    const handleClick = (link) => {
        window.location.href = link; // Navigates to the corresponding page
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel-wrapper"
                style={{ transform: `rotateY(${activeIndex * -itemAngle}deg)` }}
            >
                {items.map((item, index) => (
                    <div
                        key={item.name}
                        className={`carousel-item ${index === activeIndex ? 'is-visible' : ''}`}
                        style={{
                            transform: `translate(-50%, -50%) rotateY(${index * itemAngle}deg) translateZ(500px)`,
                        }}
                        onClick={() => handleClick(item.link)} // Link is triggered on click
                    >
                        <img className="item-image" src={item.image} alt={item.name} />
                        <span className="item-text">{item.name}</span> {/* Display item name under the image */}
                    </div>
                ))}
            </div>
            <div className="controls">
                <button className="control-button" onClick={handlePrev}>
                    &#10094;
                </button>
                <button className="control-button" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default ThreeDCarousel;
