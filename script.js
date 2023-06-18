const startstopBtn=document.querySelector("#startbtn")
const resetBtn=document.querySelector("#resetbtn");
const timer=document.querySelector(".timer");

let hours,minutes,seconds;
hours=0;
minutes=0;
seconds=0;



const stopwatch=function(){
    seconds++;
    if(seconds/60 ==1){
        seconds=0;
        minutes++;
    }
    if(minutes/60 ==1){
        minutes=0;
        hours++;
    }
    timer.textContent=`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    
}
let stdTimer;
// const stdTimer=setInterval(stopwatch,1000);
startstopBtn.addEventListener("click",function(){
    if(timer.classList.contains("active")){
        clearInterval(stdTimer);
        timer.classList.remove("active");
    }
    else{
    stdTimer=setInterval(stopwatch,1000);
    timer.classList.add("active");
    }
})

resetBtn.addEventListener("click",function(){
    hours=0;
    seconds=0;
    minutes=0;
    timer.textContent=`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

})






