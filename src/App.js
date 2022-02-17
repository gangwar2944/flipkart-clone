import React from "react";
import './App.css';
import Header from './jsx/Header.jsx'
import Navbar from './jsx/Navbar.jsx'
import Slider from './jsx/Slider.jsx'
import Deals from './jsx/Deals.jsx'
import Suggested from './jsx/Suggested.jsx'
import Fashion from './jsx/Fashion.jsx'
import './css/Header.css';
import './css/Navbar.css';
import './css/Slider.css';
import './css/Deals.css';
import './css/Suggested.css';
import './css/Fashion.css';
import { SliderData } from "./jsx/SliderData";



function App() {
  return (
    <> 
    <Header/>
    <Navbar/>
    <Slider slides={SliderData}/>
    <Deals/>
    <Suggested/>
    <Fashion/>
    </>
  );
}

export default App;
