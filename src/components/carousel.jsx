import React, { useState, useEffect } from 'react';
import './carousel.css';

// Import images directly
import image1 from '../images/2.jpg';
import image2 from '../images/3.jpg';
import image3 from '../images/1.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';

const images = [image1, image2, image3, image4, image5];

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
