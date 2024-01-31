import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductImage from "../images/Productimage.png";
import Package from './Packages'; 
import "./styles.css";

const ProductPage = () => {
    const history = useNavigate();

    
    const handleClick = (packageName, originalPrice, discountedPrice) => {
        console.log({discountedPrice});
        history(`/sessionbooking?packageName=${packageName}&originalPrice=${originalPrice}&discountedPrice=${discountedPrice}`);
    };

    return (
        <div className="product-page">
            <div className='product-page-top'>
                <div className='product-page-top-left'>
                    <h1>Yoga for Mind</h1>
                    <img src={ProductImage} alt="Product" height="500px" width="700px" />
                </div>
                <div className='product-page-top-right'>
                    <h1>Choose Your Package</h1>
                    <Package
                        duration={6}
                        originalPrice={12999}
                        discountedPrice={5499}
                        onClick={handleClick}
                    />
                    <Package
                        duration={3}
                        originalPrice={5999}
                        discountedPrice={2999}
                        onClick={handleClick}
                    />
                    <Package
                         duration={1}
                        originalPrice={1999}
                        discountedPrice={1199}
                        onClick={handleClick}
                    />
                    
                </div>
            </div>
            <div className='product-page-bottom'>
                <div className='product-page-bottom-left'>
                    <h1>What is Yoga for Mind?</h1>
                    <p>.𝚃𝚑𝚎 𝚈𝚘𝚐𝚊 𝚏𝚘𝚛 𝙼𝚒𝚗𝚍 𝚜𝚎𝚜𝚜𝚒𝚘𝚗𝚜 𝚒𝚗𝚟𝚘𝚟𝚎 𝚖𝚒𝚗𝚒𝚖𝚊𝚕 𝚙𝚑𝚢𝚜𝚒𝚌𝚊𝚕 𝚖𝚘𝚟𝚎𝚖𝚎𝚗𝚝 𝚊𝚗𝚍 𝚛𝚎𝚕𝚒𝚎𝚜 𝚘𝚗 𝚝𝚎𝚌𝚑𝚗𝚒𝚚𝚞𝚎𝚜 𝚜𝚞𝚌𝚑 𝚊𝚜 𝚙𝚛𝚊𝚗𝚊𝚢𝚊𝚖𝚊 𝚊𝚗𝚍 𝚖𝚎𝚍𝚒𝚝𝚊𝚝𝚒𝚘𝚗. 𝚂𝚞𝚒𝚝𝚎𝚍 𝚏𝚘𝚛 𝚠𝚘𝚖𝚎𝚗 𝚠𝚑𝚘 𝚌𝚊𝚗𝚗𝚘𝚝 𝚙𝚎𝚛𝚏𝚘𝚛𝚖 𝚖𝚘𝚛𝚎 𝚙𝚑𝚢𝚜𝚒𝚌𝚊𝚕 𝚏𝚘𝚛𝚖𝚜 𝚘𝚏 𝚢𝚘𝚐𝚊 𝚊𝚗𝚍 𝚊𝚛𝚎 𝚕𝚘𝚘𝚔𝚒𝚗𝚐 𝚏𝚘𝚛 𝚛𝚎𝚕𝚒𝚎𝚏 𝚏𝚛𝚘𝚖 𝚌𝚘𝚗𝚌𝚎𝚛𝚗𝚜 𝚜𝚞𝚌𝚑 𝚊𝚜 𝚜𝚝𝚛𝚎𝚜𝚜, 𝚊𝚗𝚡𝚒𝚎𝚝𝚢, 𝚕𝚘𝚠 𝚖𝚘𝚘𝚍 𝚎𝚝𝚌</p>
                </div>
                <div className='product-page-bottom-right'>
                    <h1>What you'll get</h1>
                    <p>A chat group on the Elda app where you can connect with your trainer and the rest of the Elda yoga community.</p>
                    <p>Ability to reschedule your class if you miss your session.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
