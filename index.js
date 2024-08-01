const progressBar = document.querySelector(".progress__bar");
const circle = document.querySelectorAll(".circle");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


let turnTimes = 1;

next.addEventListener('click', ()=>{
    turnTimes++;
    if(turnTimes>circle.length){
        turnTimes=circle.length;
    }
    // console.log(turnTimes);
    updateDOM();
})

prev.addEventListener('click', ()=>{
    turnTimes--;
    if(turnTimes<1){
        turnTimes=1;
    }
    // console.log(turnTimes);
    updateDOM();
})

function updateDOM(){
    circle.forEach((elem, index)=>{
        if(index<turnTimes){
            elem.classList.add("active");
        }
        else{
            elem.classList.remove("active");
        }
    })

    let activeCircle = document.querySelectorAll(".active");
    // console.log((activeCircle.length -1), circle.length-1);
    progressBar.style.width= ((activeCircle.length -1) / (circle.length -1))*100+"%" ;

    if(turnTimes===1){
        prev.disabled=true;
    }
    else if(turnTimes===circle.length){
        next.disabled=true;    
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}



