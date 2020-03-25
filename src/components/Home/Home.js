import React, { useEffect } from 'react';
import './Home.css';
import { gsap } from 'gsap';


const Home = () => {

    useEffect(() => {
        // const timeline = gsap.timeline({ repeat: -1, yoyo: true });
        const timeline = gsap.timeline();
        timeline.from('.Header', {
            y: -150,
            opacity: 0,
            backgroundColor: '#000000',
            duration: 1,
            ease: 'power4',
        });
        timeline.from('.Home__title', {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power4',
        });
    }, []);

    return (
        <section className="Home">
            <h2 className="Home__title">
                Go on Adventures You've Only Dreamt of…
            </h2>
            <p className="Home__text">
                Travel new lands and see magical landscapes with the wide 101° field of view through the large lens. 
                The stable and precise head tracking via the built-in gyro sensor and accelerometer makes sure it's a smooth ride.
            </p>
        </section>
    )
};

export default Home;