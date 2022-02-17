
const Header=()=>{
    return ( 
        <>
        <header className="header">
        <div className="logo_section">
           <div className="logo">
             <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-inventory-management-system-zap-inventory-1.png" alt=""/>
            </div>
            <div className="logo_text">
                <h2>Flipkart</h2>
                <small>Explore <span className="yellow">plus</span><span className="yellow"><i className="fa-solid fa-plus"></i></span></small>
            </div>
            <div className="input_box">
                <input type="text" placeholder="Search for products brands and more.."/>
                <span><i className="fa fa-search"></i></span> 
            </div>  
        </div>
        <div className="navlink">
            <ul>
                <li><a href="#">My Account </a><span className="fa-light"><i className="fa-solid fa-caret-down"></i></span> </li>
                <li><a href="#">More </a><span className="fa-light"><i className="fa-solid fa-caret-down"></i></span></li>
                <li><a href="#"><span className="cart"><i className="fa-solid fa-cart-plus"></i></span>Cart</a> </li>
                
            </ul>
        </div>
    </header>
        </>
    );
}
export default Header;