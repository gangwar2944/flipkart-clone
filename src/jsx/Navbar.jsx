import React from 'react';
import {FaChevronDown} from '@react-icons/all-files/fa/FaChevronDown';
const Navbar=()=>{

    const GridItem=(props)=>{
        return (<>
            <div className="grid-item">
                <div className="item_option">
                    <img src={props.imageUrl} alt=""/>
                    <p className="items_heading" >{props.heading}</p>
                    <span className="fa-solid"><i className="fa-solid fa-caret-down"></i></span>
              </div>
            </div>
        </>);
    }
   return (
       <>
        <section className="navbar">
        <div className="grid-container">
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" heading="Top offers"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" heading="Grocery"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" heading="mobiles"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" heading="fashion"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" heading="electronics"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" heading="home"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" heading="Appliances"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" heading="travel"/>
            <GridItem imageUrl="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" heading='Buety,Toy'/>
        </div>
    </section>
       </>
   );
}
export default Navbar;