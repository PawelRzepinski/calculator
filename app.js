const screen = document.querySelector(".calculator__screen");
const btns = document.querySelectorAll(".btn");
const numberBtn = document.querySelectorAll(".btn--number");
const actionBtn = document.querySelectorAll(".btn--action");
const multi = document.querySelector("#multiply");
const division = document.querySelector("#division");
const add = document.querySelector("#add");
const substraction = document.querySelector("#substraction");
const finalResult = document.querySelector("#result");
let arr = [];
let result = 0;

const wyniki = function (){

}


const addAction = function (tab){
    tab = arr;
    tab.forEach(function(el){
        result += el;        
    })
    return result;
}

addAction();


const printResult = function () {
    screen.innerText = result;
}






const addValue = function () {
    console.log(this.innerText);

    let number = parseInt(this.innerText, 10)
    arr.push(number);
    console.log(arr);
    
}



numberBtn.forEach(function(el){
    el.addEventListener("click", addValue);
})

btns.forEach(function(el){
    el.addEventListener("mousedown",function(){
        console.log('działa down');
        this.style.boxShadow = "none";
    })

    el.addEventListener("mouseup",function(){
        console.log('działa up');
        this.style.boxShadow = "0px 0px 6px 2px rgba(0,0,0,0.75)";
    })
    
})

finalResult.addEventListener("click", printResult);