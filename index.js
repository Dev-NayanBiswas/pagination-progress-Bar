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

    // Looping Through Every circle items and searching which one got the less index value compare with state value? and Update the DOM...
    circle.forEach((elem, index)=>{
        if(index<turnTimes){
            elem.classList.add("active");
        }
        else{
            elem.classList.remove("active");
        }
    })

    updateCss();
    enableAndDisable();
}

function enableAndDisable(){
    // Here enabling the disabled button and disabling enable on conditions. . . 
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

function updateCss(){
     // Calculating active elements and  getting a percentage value to get the desired width of progress bar and update it's cSS....
     let activeCircle = document.querySelectorAll(".active");
     // console.log((activeCircle.length -1), circle.length-1);
     progressBar.style.width= ((activeCircle.length -1) / (circle.length -1))*100+"%" ;
}

