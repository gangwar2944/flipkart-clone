const Slider=()=>{
    const arr={
            img1:"https://picsum.photos/1350/500",
            img2:"https://picsum.photos/1350/499",
            img3:"https://picsum.photos/1349/499",
            img4:"https://picsum.photos/1348/499",
            img5:"https://picsum.photos/1349/500",
    }
    const prevBtn = document.querySelector(".left_icon");
    const nextBtn = document.querySelector(".right_icon");
    
    // prevBtn.addEventListener("click",()=>{
    //         console.log('left');
    //         // next("prev");
    // });
    // nextBtn.addEventListener("click",()=>{
    //         console.log('right');
    //         // next("next");
    // })

    return (
     
        <>
 <section className="slider ">
        <div className="img_slider">
            <span className="left_icon"><i className="fa-solid fa-angle-left"></i></span>
            <img src={arr.img2}/>
            <span className="right_icon"><i className="fa-solid fa-angle-right"></i></span>
        </div>
    </section>

        </>
    );
}
export default Slider;