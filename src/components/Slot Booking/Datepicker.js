import React, { useState } from 'react';

// Date component to display date, month, and day
const DateComponent = ({ date, month, day, isSelected, onClick }) => {
  // Get the suffix based on the last digit of the date
  const getSuffix = (date) => {
    const lastDigit = date % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  // Get the first 3 letters of the month and day
  const abbreviatedMonth = month.substring(0, 3);
  const abbreviatedDay = day.substring(0, 3);

  // Add the suffix to the date
  const dateWithSuffix = `${date}${getSuffix(date)}`;

  // Apply different styles based on whether the date is selected or not
  const dateStyle = {
    backgroundColor: isSelected ? "blue" : "white",
    color: isSelected ? "white" : "black",
  };

  return (
    <div className="date" style={dateStyle} onClick={onClick}>
      <p>{dateWithSuffix} {abbreviatedMonth}<br />{abbreviatedDay}</p>
    </div>
  );
};

// Date picker component to display multiple date components
const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Logic to get previous date
  const getPreviousDate = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  // Logic to get next date
  const getNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  // Function to handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Function to check if a date is the selected date
  const isDateSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  // Array to hold consecutive weekdays (excluding weekends)
  const consecutiveWeekdays = [];

  // Add consecutive weekdays to the array
  for (let i = 0; consecutiveWeekdays.length < 10; i++) {
    const tempDate = new Date(currentDate);
    tempDate.setDate(tempDate.getDate() + i);
    consecutiveWeekdays.push(tempDate);
  }

  return (
    <div className='cy'>
      <button onClick={getPreviousDate}>&#9664;</button>
      {consecutiveWeekdays.map((date, index) => (
        <DateComponent
          key={index}
          date={date.getDate()}
          month={date.toLocaleDateString('en-US', { month: 'short' })}
          day={date.toLocaleDateString('en-US', { weekday: 'short' })}
          isSelected={isDateSelected(date)}
          onClick={() => handleDateClick(date)}
        />
      ))}
      <button onClick={getNextDate}>&#9654;</button>
    </div>
  );
};

export default DatePicker;
