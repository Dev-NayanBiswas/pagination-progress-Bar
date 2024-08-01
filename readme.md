### selExplanation - what I learned here and how does it work?
***

1. _Here i got few Circles, 2-buttons and a progress-Bar; Logic is to add (active)/remove(active) class on each click of these 2-buttons based on a static value ***"turnTimes"***, button ***prev*** will decrease and ***next*** will increase the value, thing is that, the value can't be less then ***One*** and greater then the value of ***circle.length***. in this part..._
```javascript
// cause circle is an array of group of elements so it has a length. . .
const circle = document.querySelectorAll(".circle");

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
```
_If turnTimes is greater than circle.length then reassigning it's value with circle.length_
_and if it's lesser than 1! then reassigning it's  value as ***1***. Cause i can't go lesser then one or greater then numbers of elements. . ._
_every time I clicked on any button, need to update the DOM so I called a function ***updateDOM()***_



2. _in the 1st part of this Function I'am looping trough the circle array with forEach loop, where I'am getting every individual circle and its Index as second parameter, and checking, the index is lesser then turnTimes or not? and conditionally adding or removing ***active*** class,_
   _cause every time i clicked on a button either increasing or decreasing the static value of turnTimes, like when I click on next button it will increase the value 1 every time and will call ***updateDOM()*** function, then updateDOM will get turnTimes-2 and ***(index < turnTimes)*** is index=1, as condition it will add active class to the 1st index element which is circle2 and we will see active CSS on circle 2_
   ```javascript
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

    updateCss()
    enableAndDisable();
    }
    ```
_if **turnTimes** value is 5 (means it's 4th index element got the active class and got the css style on UI) and user hits the **prev** button, it will decrease **turnTimes** value -1 that means turnTimes=4 (turnTimes = 4 > index = 4, if condition won't match, as usual it will go for else condition), so **updateDom()** will remove active class from index 4 element, and it will lose it's CSS style.._



 1. _***updateDom*** will call 2functions ***enableAndDisable()*** and ***updateCss()*** functions, enableDisable function will check, is the turnTimes value is equal to "1" or equal to ***circle.length*** or not! If it's equal to one, then no need to go further less so it will disabled the ***prev*** button and if the turnTime is equal to ***circle.length***, then no need to go further long, as it will disable the ***next*** button on that time, if the turnTimes value won't match both condition then both button will remain visible and active_

```javascript
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
```






4. _**updateDOM** will call this **updateCSS()** function which will add width style based on **percentage(%)** of ***active*** classes elements and total numbers of elements ***circle.length***, I slightly tone it down a little to get a lesser percentage_

```javascript
function updateCss(){
     let activeCircle = document.querySelectorAll(".active");
     progressBar.style.width= ((activeCircle.length -1) / (circle.length -1))*100+"%" ;
}
```

