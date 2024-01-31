import React, { useState } from 'react';
import "./styles.css"; 

const Form = ({ handleLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [error, setError] = useState('');

  // Function to validating email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function for validating phone number format (exactly 10 digits)
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validating email or phone number
    if (checkboxChecked) {
      if (!validateEmail(emailOrPhone) && !validatePhoneNumber(emailOrPhone)) {
        setError('Invalid email or phone number');
        return;
      }
    } else {
      setError('');
    }

    // Call handleLogin function and passing emailOrPhone
    handleLogin(emailOrPhone);
  };

  return (
    <div>
      <form className="form-element" onSubmit={handleSubmit}>
        <h1>Login to your account</h1>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        {error && <p className="error">{error}</p>}

        <div className="terms-and-conditions">
          <input 
            type="checkbox" 
            checked={checkboxChecked}
            onChange={() => setCheckboxChecked(!checkboxChecked)}
          />
          <p> I agree with the Terms & conditions & Privacy Policy of Elda Health </p>
        </div>
        <button
          type="submit"
          disabled={!checkboxChecked}
          style={{ backgroundColor: !checkboxChecked ? "white" : "#E7625F" }}
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default Form;
