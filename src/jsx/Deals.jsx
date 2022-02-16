import Timer from "./Timer";
const Deals=()=>{
    return (
        <>
 <section className="container_deals">
     <div className="sub_container">
        <div className="deals_of_days">
             <div className="deals_title">
                <h1>Deals of the day</h1>
                <Timer/>
              </div>
             <button className="btn">Veiw All</button>
         </div>  
         <div className="deals_items">
             <div className="single_item">
                 <img src="https://rukminim1.flixcart.com/flap/150/150/image/bf8b486d47c7aeba.jpg?q=70" alt=""/>
                 <h3 className="h3">Gee & oil</h3>
                 <p className="para">also grab $1 deals </p>
                 <p className="para2" >amul,dara & more</p>
             </div>
             <div className="single_item">
                 <img src="https://rukminim1.flixcart.com/flap/150/150/image/eeea14a5f3b8590d.jpg?q=70" alt=""/>
                 <h3 className="h3">dry fruits</h3>
                 <p className="para">upto 40% off </p>
                 <p className="para2">also grab $1 deals</p>
             </div>
             <div className="single_item">
                 <img src="https://rukminim1.flixcart.com/flap/150/150/image/180ab196994f0f51.jpg?q=70" alt=""/>
                 <h3 className="h3">party special</h3>
                 <p className="para">free delivery</p>
                 <p className="para2">chips snacke & more</p>
             </div>
             <div className="single_item">
                 <img src="https://rukminim1.flixcart.com/image/150/150/keaaavk0/soldering-iron/z/4/n/10in1-basic-25w-soldering-iron-kit-with-5-meter-solder-wire-original-imafvy8cskcuakdd.jpeg?q=70" alt=""/>
                 <h3 className="h3">more improv..</h3>
                 <p className="para">upta 60% off </p>
                 <p className="para2">best selling</p>
             </div>
             <div className="single_item">
                 <img src="https://rukminim1.flixcart.com/image/150/150/jw6pifk0/t-shirt/h/b/n/s-9045005-harvard-original-imafgwnud4qwgdak.jpeg?q=70" alt=""/>
                 <h3 className="h3">U.S Polo..</h3>
                 <p className="para">from 249rs  </p>
                 <p className="para2">T-shirt jeans & jacket</p>
             </div>
             <div className="single_item">
                 <img src="https://rukminim1.flixcart.com/image/150/150/kvo55zk0/coffee/p/j/v/60-hazelnut-favoured-instant-coffee-powder-no-added-sugar-100-original-imag8gserngxxeza.jpeg?q=70" alt=""/>
                 <h3 className="h3">food & web</h3>
                 <p className="para">extra 5% off</p>
                 <p className="para2">dry fruits & coffee</p>
             </div>
         </div>  
      </div>
      <div className="ads"><img src="https://rukminim1.flixcart.com/flap/464/708/image/4b1e81bbf89e9f64.jpg?q=70" alt=""/></div>
    </section>
        </>
    );
}
export default Deals;