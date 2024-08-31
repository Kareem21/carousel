import React, { useEffect, useRef } from 'react';
import '../styles/ThreeDCarousel.css';

const ThreeDCarousel = ({ items }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const totalItems = items.length;
        const angle = 360 / totalItems;
        const radius = 550; // Adjusted radius for more space between images

        const slider = wrapperRef.current;
        const spanElements = slider.querySelectorAll('span');

        spanElements.forEach((span, i) => {
            span.style.transform = `rotateY(${angle * i}deg) translateZ(${radius}px)`;
        });

        let currentAngle = 0;
        const animateCarousel = () => {
            setInterval(() => {
                currentAngle += 0.2; // Slower rotation
                spanElements.forEach((span, i) => {
                    const itemAngle = angle * i + currentAngle;
                    const bounce = Math.sin((currentAngle + angle * i) * Math.PI / 180) * 10; // Small bounce effect
                    span.style.transform = `rotateY(${itemAngle}deg) translateZ(${radius + bounce}px)`;
                });
            }, 20); // Roughly 60 FPS
        };

        animateCarousel();
    }, [items]);

    return (
        <div className="carousel-container">
            <div className="slider" ref={wrapperRef}>
                {items.map((item, index) => (
                    <span key={index} style={{ '--i': index + 1 }}>
                        <img src={item.image} alt={item.name} />
                        <div className="item-text">Carousel Site</div>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ThreeDCarousel;
