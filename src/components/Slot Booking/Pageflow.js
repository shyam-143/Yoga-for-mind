import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pageflow = () => {
    const navigate = useNavigate();

    return (
        <div className="pageflow">
            <p onClick={() => navigate("/home")}>Yoga <span>&#9658;</span></p>
            <p onClick={() => navigate("/product")}>Yoga for mind <span>&#9658;</span></p>
            <p onClick={() => navigate('/sessionbooking')}>Package </p>
        </div>
    );
};

export default Pageflow;
