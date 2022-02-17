import {SuggetionData} from './DataArray/SuggetionData'
const Suggested=()=>{
    const SuggestedSingleItem =(props)=>{
        return (
            <>
               <div className="suggested_single_item">
                  <img src={props.imgUrl} alt=""/>
                  <p className="mobile_name">{props.name}</p>
                  <p className="rating"><span>{props.rating}<i className="fa-solid fa-star"></i></span><span className="actul_price">{props.ratingCount}</span></p>
                  <small className="price"><b>{props.price}</b><strike>{props.sPrice}</strike> <span className="green">{props.discount}</span></small>
              </div>
            </>
        );
    }
    return (
        <>
            <section className="container"> 
      <div className="suggested">
          <div className="heading_interest">
              <h1>suggested for you</h1>
              <p>based on your interest</p>
          </div>
          <button className="btn">Veiw All</button>
       </div>
       <div className="suggested_items">
              {SuggetionData.map((mobile,index)=>{
                  return  <SuggestedSingleItem
                  imgUrl={mobile.imgUrl}
                  name={mobile.name}
                  rating={mobile.rating.ratingNumber}
                  ratingCount={mobile.rating.ratingCount}
                  price={mobile.price.currPrice}
                  sPrice={mobile.price.oldprice}
                   discount={mobile.price.off}
                 />   
              })}
              
       </div>
   </section>
        </>
    );
}
export default Suggested;