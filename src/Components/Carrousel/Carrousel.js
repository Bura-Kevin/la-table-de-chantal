import React, { useState, useEffect } from 'react';
import './Carrousel.css';

export default function Carrousel({ images }) {

    const [index, setIndex] = useState(0);

    const suivant = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    const precedent = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    // Change d'image automatiquement toutes les 5 secondes
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [index, images.length]);

    return (
        <div className='carrousel'>
            {images.map((image, i) =>
                <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={i === index ? 'carrousel-img active' : 'carrousel-img'}
                />
            )}

            <button className='carrousel-btn prev' onClick={precedent} aria-label="Image précédente">‹</button>
            <button className='carrousel-btn next' onClick={suivant} aria-label="Image suivante">›</button>

            <div className='carrousel-dots'>
                {images.map((image, i) =>
                    <button
                        key={image.src}
                        className={i === index ? 'dot active' : 'dot'}
                        onClick={() => setIndex(i)}
                        aria-label={`Aller à l'image ${i + 1}`}
                    />
                )}
            </div>
        </div>
    )
}
