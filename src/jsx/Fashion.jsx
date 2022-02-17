import { FashionData } from "./DataArray/FashionData";
import {SingleItem} from './Deals.jsx'

const Fashion=()=>{
    return (
        <>
   <section className="container">
         <div className="suggested">
              <div className="heading_interest">
                 <h1>best price on fasion</h1>
              </div>
              <button className="btn">Veiw All</button>
          </div>
         <div className="fasion_item">

             {FashionData.map((item,index)=>{
                  return <SingleItem
                       key={index}
                       imgUrl={item.imgUrl} 
                       imgHeading={item.imgHeading} 
                       imgPara1 ={item.imgPara1} 
                       imgPara2={item.imgPara2}       
                        />
                 })}
        
         </div>
   </section>
        </>
    );
}
export default Fashion;