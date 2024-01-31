import React from 'react'
import HomePage from './components/HomePage/HomePage';
import Login from './components/LoginPage/Login';
import ProductPage from "./components/Product Page/ProductPage";
import Yogabatchslot from "./components/Slot Booking/Yogabatchslot";
import FinalPage from "./components/Finalpage";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />}/>
          <Route path="/sessionbooking" element={<Yogabatchslot/>}/>
          <Route path="/finalpage" element={<FinalPage />}/>
          <Route path='/*' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
