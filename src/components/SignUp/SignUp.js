import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <section className="SignUp">
            <div className="SignUp__content">
                <h2 className="SignUp__title">
                    Sign Up Now
                </h2>
                <p className="SignUp__text">
                    Use the Minini VR controller as a remote control to navigate your virtual reality with ease or use it as a gamepad.
                </p>
                <form action="#" className="SignUp__form">
                    <input type="text" required placeholder="name" className="SignUp__input"/>
                    <input type="email" required placeholder="email" className="SignUp__input"/>
                    <button className="SignUp__button">Sign Up Now</button>
                </form>
                </div>
        </section>
    )
};

export default SignUp;