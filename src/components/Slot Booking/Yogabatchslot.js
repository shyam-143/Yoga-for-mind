import React from 'react';
import ProductImage from "../images/Productimage.png";
import PageFlow from "./Pageflow";
import TimeSlot from "./Timeslot";
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from "./Datepicker";
import "./styles.css";

function YogaSessionBooking() {
    const history = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const duration = queryParams.get('packageName');
    const originalPrice = queryParams.get('originalPrice');
    const discountedPrice = queryParams.get('discountedPrice');
    console.log({discountedPrice});

    const handleChangePlan = () => {
        history("/product");
    };

    const handleBuyPackage = () => {
        history("/finalpage");
    };

    return (
        <div className='slot-booking'>
            <img src={ProductImage} alt="" width="100%" height="200px" />
            <h1>What is Yoga for Mind</h1>
            <p>𝚃𝚑𝚎 𝚈𝚘𝚐𝚊 𝚏𝚘𝚛 𝙼𝚒𝚗𝚍 𝚜𝚎𝚜𝚜𝚒𝚘𝚗𝚜 𝚒𝚗𝚟𝚘𝚟𝚎 𝚖𝚒𝚗𝚒𝚖𝚊𝚕 𝚙𝚑𝚢𝚜𝚒𝚌𝚊𝚕 𝚖𝚘𝚟𝚎𝚖𝚎𝚗𝚝 𝚊𝚗𝚍 𝚛𝚎𝚕𝚒𝚎𝚜 𝚘𝚗 𝚝𝚎𝚌𝚑𝚗𝚒𝚚𝚞𝚎𝚜 𝚜𝚞𝚌𝚑 𝚊𝚜 𝚙𝚛𝚊𝚗𝚊𝚢𝚊𝚖𝚊 𝚊𝚗𝚍 𝚖𝚎𝚍𝚒𝚝𝚊𝚝𝚒𝚘𝚗. 𝚂𝚞𝚒𝚝𝚎𝚍 𝚏𝚘𝚛 𝚠𝚘𝚖𝚎𝚗 𝚠𝚑𝚘 𝚌𝚊𝚗𝚗𝚘𝚝 𝚙𝚎𝚛𝚏𝚘𝚛𝚖 𝚖𝚘𝚛𝚎 𝚙𝚑𝚢𝚜𝚒𝚌𝚊𝚕 𝚏𝚘𝚛𝚖𝚜 𝚘𝚏 𝚢𝚘𝚐𝚊 𝚊𝚗𝚍 𝚊𝚛𝚎 𝚕𝚘𝚘𝚔𝚒𝚗𝚐 𝚏𝚘𝚛 𝚛𝚎𝚕𝚒𝚎𝚏 𝚏𝚛𝚘𝚖 𝚌𝚘𝚗𝚌𝚎𝚛𝚗𝚜 𝚜𝚞𝚌𝚑 𝚊𝚜 𝚜𝚝𝚛𝚎𝚜𝚜, 𝚊𝚗𝚡𝚒𝚎𝚝𝚢, 𝚕𝚘𝚠 𝚖𝚘𝚘𝚍 𝚎𝚝𝚌.</p>
            <PageFlow />
            <div className="container">
  <div className="package-detail">
    <h1>{duration} Yoga For Mind</h1>
    <h2 style={{ color: "red" }} onClick={handleChangePlan}> Change Plan</h2>
  </div>
  <div className="price-details">
    <div className="price">
      <p style={{ color: "#328484" }}>₹{discountedPrice}</p>
      <p style={{ textDecoration: 'line-through' }}>₹{originalPrice}</p>
    </div>
  </div>
</div>

            <DatePicker />
            <h1 style={{ color: "blue" }}>Select time slot</h1>
            <TimeSlot time=" 05:00 PM - 05:40 PM " />
            <TimeSlot time=" 08:00 AM - 08:40 AM " />
            <button style={{ backgroundColor: "red", margin: "20px", borderRadius: "10px" }} onClick={handleBuyPackage}>Buy Package</button>
        </div>
    );
}

export default YogaSessionBooking;
