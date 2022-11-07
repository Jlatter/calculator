const numberBtns= document.querySelectorAll(`[number]`)
let display = document.getElementById("result")
let currentNumber =0
display.innerHTML=0

numberBtns.forEach((button)=> button.addEventListener("click", event=>displayNum(button.textContent)))
const displayNum=function(number){
  if(display.innerHTML==="0"){display.innerHTML=""};
  display.innerHTML+= number;
  currentNumber=number
}

const add = function(a,b) {
	let result = a + b
  return result
};
const divide = function(a,b) {
	let result = a / b
  return result
};

const subtract = function(a,b) {
	let result = a-b
  return result
};

const sum = function(a) {
  let numArray = a
  let result = 0;
for (let i = 0; i<numArray.length;i++){
  result+=numArray[i];
}
return result
};

const multiply = function(a) {
  let numArray = a
  let result = 1;
for (let i = 0; i<numArray.length;i++){
  result*=numArray[i];
}
return result
};

const power = function(a,b) {
	let result =Math.pow(a,b)
  return result
};