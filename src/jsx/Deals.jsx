import Timer from "./Timer";
import {DealsData} from "./DataArray/DealsData";
const SingleItem=(props)=>{
    return (
        <>
                <div className="single_item">
                   <img src={props.imgUrl} alt=""/>
                   <h3 className="h3">{props.imgHeading}</h3>
                   <p className="para">{props.imgPara1}</p>
                   <p className="para2">{props.imgPara2}</p>
                </div>
        </>
    );
}
const Deals=()=>{
   
    return (
        <>
 <section className="container_deals">
     <div className="sub_container">
        <div className="deals_of_days">
             <div className="deals_title">
                <h1>Deals of the day</h1>
                {/* <Timer/> */}
              </div>
             <button className="btn">Veiw All</button>
         </div>  
         <div className="deals_items">
            {DealsData.map((item,index)=>{
                return <SingleItem
                   key={index}
                   imgUrl={item.imgUrl} 
                    imgHeading={item.imgHeading} 
                    imgPara1 ={item.imgPara1} 
                    imgPara2={item.imgPara2} 
                    
              />
            })}
         </div>  
      </div>
      <div className="ads"><img src="https://rukminim1.flixcart.com/flap/464/708/image/4b1e81bbf89e9f64.jpg?q=70" alt=""/></div>
    </section>
        </>
    );
}
export default  Deals;
export {SingleItem} ;