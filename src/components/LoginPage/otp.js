// otp.js
import React, { useState, useRef, useEffect } from 'react';

const Otp = (props) => {
  const [otpValue, setOtpValue] = useState(new Array(props.length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const newValue = e.target.value;
    setOtpValue(prevOtpValue => {
      const updatedOtpValue = [...prevOtpValue];
      updatedOtpValue[index] = newValue.slice(-1);
      return updatedOtpValue;
    });

    if (newValue && index !== props.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpValue[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const mockOtp = '1234';
    const enteredOtp = otpValue.join("");

    if (enteredOtp === mockOtp) {
      // Trigger the function passed as prop from Login component
      props.onOtpsubmit();
    } else {
      alert("Incorrect OTP. Please try again.");
      // Clear OTP fields or take other actions for incorrect OTP
    }
  };

  return (
    <div>
      {otpValue.map((value, index) => (
        <input
          key={index}
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          placeholder="Enter OTP"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="otpinput"
        />
      ))}
      <button onClick={handleSubmit}>Verify OTP</button>
    </div>
  );
};

export default Otp;
