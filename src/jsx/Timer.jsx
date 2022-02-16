import React from 'react';

const Timer =()=>{

        const t = setInterval(function(){
        const timer = document.querySelector(".timer");
        const newDate = new Date("feb 20,2022 12:00:00");
        
        const currDate = new Date();
        
        
        const totalSeconds = (newDate-currDate)/1000;
        const second =Math.floor((totalSeconds%60))
        const minute =Math.floor( (totalSeconds/60)%60);
        const hour =Math.floor( (totalSeconds/3600)%24);
        const day =Math.floor( totalSeconds/(3600*24));
        
        const timeFormate=(time)=>{
          return time<10?`0${time}`: time;
        };
        timer.innerHTML=`${day}days ${timeFormate(hour)} : ${timeFormate(minute)} : ${timeFormate(second)}`;
        },1000);
        
    return (<>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" style={{width: '25px',height: "25px",marginLeft:'10px'}} alt="" />
        <p className="timer" style={{fontWeight:'bold',letterSpacing:"1px",marginLeft:'5px'}}></p>
    </>);
};

export default Timer;