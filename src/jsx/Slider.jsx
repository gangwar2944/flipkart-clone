import { useState } from "react";
import '../css/Slider.css';
import { SliderData } from "./SliderData";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';

const Slider=({slides})=>{
    const [current,setCurrent]=useState(0);
    const length = slides.length;
    if(!Array.isArray(slides)|| slides.length<=0){
        return null;
    }
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }
    return (
        <>
             <section className="slider container">
             <FaArrowAltCircleRight className="right_icon" onClick={nextSlide}/>
             <FaArrowAltCircleLeft className="left_icon" onClick={prevSlide}/>
                 {SliderData.map((slide,index)=>{
                return <div className={index===current?'img_slider active':'img_slider'} key={index}>
                {index===current&&(<img src={slide.img} alt="photo"/>)}
                </div>
                })}
             </section>

        </>
    );
}
export default Slider;