import React from 'react';

const Package = ({ duration, originalPrice, discountedPrice, onClick }) => {
    return (
        <div className='package'>
            <div className='package-left'>
                <h1>{duration} Months</h1>
                <div className="price-container">
                    <h3>₹{originalPrice}</h3>
                    <h2>₹{discountedPrice}</h2>
                </div>
            </div>
            <div className='package-right'>
                <p>₹{Math.floor(discountedPrice/duration)}/month</p>
                <button onClick={() => onClick(duration, originalPrice, discountedPrice)}>Buy now</button>
            </div>
        </div>
    );
};

export default Package;
