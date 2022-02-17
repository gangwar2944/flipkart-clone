import React, { useState } from 'react';

const Timer =()=>{

    //   const newDate = new Date("feb 20,2022 12:00:00");

    //   //  const currDate = new Date();
    //   let currDate = new Date();
      
    //   const totalSeconds = (newDate-currDate)/1000;
    //   const second =Math.floor((totalSeconds%60))
    //   const minute =Math.floor( (totalSeconds/60)%60);
    //   const hour =Math.floor( (totalSeconds/3600)%24);
    //   const day =Math.floor( totalSeconds/(3600*24));
     
    //   const timeFormate=(time)=>{
    //     return time<10?`0${time}`: time;
    // };
    //   let remainTime=`${day}days ${timeFormate(hour)} : ${timeFormate(minute)} : ${timeFormate(second)}`;

    //   const [cTime,setTime]=useState(remainTime);

    //   const UpdateTime=()=>{
    //     remainTime=`${day}days ${timeFormate(hour)} : ${timeFormate(minute)} : ${timeFormate(second)}`;
    //     setTime(remainTime);
    //      };

    //------------------------------using javascript-------------------------------//

      const UpdateTime=()=>{
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
     
         };
        setInterval(UpdateTime,1000);

        const cssStyle ={ 
          fontWeight:'bold',
          letterSpacing: '1px',
          marginLeft:'5px'
        };
        const imgStyle={
          width: '25px',height: "25px",marginLeft:'10px'
        }
    return (<>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" style={imgStyle} alt="" />
        <p className="timer" style={cssStyle}></p>
        {/* <p style={cssStyle}>{cTime}</p> */}
        {/* <p style={cssStyle}>{remainTime}</p> */}
    </>);
};

export default Timer;