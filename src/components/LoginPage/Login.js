import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Otp from "./otp";
import Form from "./form";
import "./styles.css";


const Login = () => {
  const [showotpinput, setshowOtp] = useState(false);
  const history = useNavigate();

  const handleLogin = (emailOrPhone) => {
    // Implement logic to send OTP to the provided email or phone number
    console.log('Sending OTP to:', emailOrPhone);
    setshowOtp(true);
  };

  const onOtpSubmit = () => {
    history("/home");
    console.log('Login Successful');
    // Implement further actions after successful OTP verification
  };

  return (
    <div className="login-container">
      <div className="login-content">
      {!showotpinput ? (
        <Form handleLogin={handleLogin} />
      ) : (
        <Otp length={4} onOtpsubmit={onOtpSubmit} />
      )}
      </div>
    </div>
  );
};

export default Login;
