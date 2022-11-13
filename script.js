const numberBtns= document.querySelectorAll(`[number]`)
let display = document.getElementById("result")
let clear = document.getElementById("clear")
let del = document.getElementById("delete")
let currentNumber =""
let secondNumber = ""
let realSecond =  parseFloat(secondNumber)
display.innerHTML=0
let i=0
let result =0
let number
numberBtns.forEach((button)=> button.addEventListener("click", event=>displayNum(button.textContent)))

const displayNum=function(number){
  
  console.log(number +" this is the first input")
  if(display.innerHTML==="0"){display.innerHTML=""};
  display.innerHTML+= number;
  if(number==="0"||number==="1"||number==="2"||number==="3"||number==="4"||number==="5"||number==="6"||number==="7"||number==="8"||number==="9"||number==="."){currentNumber+= (number);}
  
  console.log("this is current num before changes made " +currentNumber)
    if(i===1 && number==="+"||i===1 &&number==="-"||i===1 &&number==="x"||i===1 &&number==="÷"||i===1 &&number==="="){add(secondNumber,currentNumber);console.log("second num "+secondNumber+"current num "+currentNumber)}
    else if(i===2 && number==="+"||i===2 &&number==="-"||i===2 &&number==="x"||i===2 &&number==="÷"||i===2 &&number==="="){subtract(secondNumber,currentNumber)}
    else if(i===3 && number==="+"||i===3 &&number==="-"||i===3 &&number==="x"||i===3 &&number==="÷"||i===3 &&number==="="){divide(secondNumber,currentNumber)}
    else if(i===4 && number==="+"||i===4 &&number==="-"||i===4 &&number==="x"||i===4 &&number==="÷"||i===4 &&number==="="){multiply(secondNumber,currentNumber)};
  if(number ==="+"){numSwitch();i=1}
  else if(number==="-"){numSwitch();i=2}
  else if(number==="÷"){numSwitch();i=3}
  else if(number==="x"){numSwitch();i=4}
  else if (number=== "="){;display.innerHTML = currentNumber; number=currentNumber};
   
};
clear.addEventListener("click", event=>clearing())
function clearing(){
  currentNumber =""
  secondNumber = ""
  display.innerHTML = 0
  i= 0
  result=0
}
del.addEventListener("click", event=>deletes(number))
function deletes(number){
  display.innerHTML =display.innerHTML.slice(0,-1)
  currentNumber = currentNumber.slice(0,-1)
}

function numSwitch(){
  secondNumber=currentNumber;
  currentNumber=""
  console.log("second number = current "+secondNumber)
  console.log("current num should equal nothing")
};
const add = function(a,b) {
  console.log("this is a and b " + a,b)
  let nA = parseFloat(a)
  let nB = parseFloat(b)
	result = nA + nB;
  currentNumber=result;
  secondNumber=0;
  console.log ("this is after function call "+ currentNumber)
  return console.log(result)
};
const divide = function(a,b) {
  let nA = parseFloat(a)
  let nB = parseFloat(b)
	result = nA / nB
  currentNumber=result
  secondNumber=currentNumber*currentNumber;
  return console.log(result)
};

const subtract = function(a,b) {
  let nA = parseFloat(a)
  let nB = parseFloat(b)
	result = nA-nB
  currentNumber=result
  secondNumber= currentNumber*2
  return console.log(result)
};


const multiply = function(a, b) {
  let nA = parseFloat(a)
  let nB = parseFloat(b)
  result = nA *nB
  secondNumber=1;
  currentNumber=result
return console.log(result)
};




