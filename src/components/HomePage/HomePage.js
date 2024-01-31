import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUNDICON from './ROUNDICON';
import STRESSICON from "../images/stress icon.png";
import Breathingicon from "../images/breathingicon.png";
import Runningicon from "../images/Running icon.png";
import HomePageicon from "../images/homepageimage.png";
import "./styles.css";

const HomePage = () => {
    const history = useNavigate();

    const handleClick = () => {
        history("/product");
    };

    return (
        <div>
            <div className='header'>
                <div className="header-left">
                    <h1>Yoga For Mind</h1>
                    <p>Watch Our lead Yoga Therapist, Ms Uma Subramaniam explain Yoga for Mind</p>
                </div>
                <div className="header-right">
                    <img src={HomePageicon} alt="homepageicon"  height="300px"/>
                </div>
            </div>
            <div className='section'>
                <h2>Is this for you?</h2>
            </div>
            <div className='features'>
                <div className="feature">
                    <ROUNDICON icon={STRESSICON} text="Hard to feel calm or sleep because of stress" />
                    <button>Book trial @99</button>
                </div>
                <div className="feature">
                    <ROUNDICON icon={Breathingicon} text="If you have palpitations and breathing trouble" />
                    <button onClick={handleClick}>I want to Buy</button>
                </div>
                <div className="feature">
                    <ROUNDICON icon={Runningicon} text="You have been advised by doctor to avoid physical activity" />
                    <a href="https://www.w3schools.com">I have a question</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
