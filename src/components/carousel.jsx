import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
    'images/2.webp',
    'images/3.jpg',
    'images/1.jpg',
    'images/4.jpg',
    'images/5.jpg',

    // Add more images here if you have them
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Rotate every 3 seconds
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="carousel">
            <div
                className="carousel__container"
                style={{
                    transform: `rotateY(${-currentIndex * (360 / images.length)}deg)`,
                }}
            >
                {images.map((image, index) => (
                    <div
                        className="carousel__slide"
                        key={index}
                        style={{
                            transform: `rotateY(${index * (360 / images.length)}deg) translateZ(400px)`,
                        }}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
