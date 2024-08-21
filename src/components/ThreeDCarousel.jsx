import React, { useState, useEffect, useRef } from 'react';
import '../styles/ThreeDCarousel.css';

const ThreeDCarousel = ({ items }) => {
    const wrapperRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        const totalItems = items.length;
        const angle = 360 / totalItems;
        const radius = 400; // Increased radius for more space

        const slider = wrapperRef.current;
        slider.style.transform = `rotateY(0deg) translateZ(${-radius}px)`;

        const spanElements = slider.querySelectorAll('span');
        spanElements.forEach((span, i) => {
            span.style.transform = `rotateY(${angle * i}deg) translateZ(${radius}px)`;
        });

        let currentAngle = 0;
        const animateCarousel = () => {
            if (!isPaused) {
                currentAngle -= 0.2; // Slower rotation speed
                slider.style.transform = `rotateY(${currentAngle}deg) translateZ(${-radius}px)`;
            }
            animationRef.current = requestAnimationFrame(animateCarousel);
        };

        animationRef.current = requestAnimationFrame(animateCarousel);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [items, isPaused]);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="carousel-container">
            <div className="slider" ref={wrapperRef}>
                {items.map((item, index) => (
                    <span key={index}>
                        <img src={item.image} alt={item.name} />
                        <div className="item-text">{item.name}</div>
                    </span>
                ))}
            </div>
            <div className="carousel-controls">
                <button className="pause-play-btn" onClick={togglePause}>
                    {isPaused ? 'Play' : 'Pause'}
                </button>
            </div>
        </div>
    );
};

export default ThreeDCarousel;