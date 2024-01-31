import React from 'react';
 // Import your CSS file

const TimeSlot = (props) => {
  return (
    <div className="time-slot">
      <div className="time-slot-top">
        <input type="radio" />
        <h3>{props.time}</h3>
      </div>
      <p>Mon, Tue, Wed, Thu, Fri</p>
    </div>
  );
};

export default TimeSlot;
