let button=document.querySelector(".button");
let prev=document.querySelector(".prev");
let remain=document.querySelector(".remain");
var number=Math.floor(Math.random()*100+1);
let massege=document.querySelector(".mess");
let container=document.querySelector(".main");
var count=1;
let massege1=document.querySelector(".mess1");
let remarks=document.querySelector(".remarks");
button.addEventListener('click',()=>{
  if(count==10){
    container.classList.add("hide");
    massege.classList.remove("hide");
    count=0;
    remain.innerHtml=`Guess remaining:${10}`;
    remarks.innerHTML="";
  }
  let input=document.querySelector("#input1");
  if(number>input.value){
    // alert("Your Guess is less than number.")
    remarks.innerHTML=`Your Guess is less than number.`;
  }
  if(number<input.value){
    // alert("Your guess is Greater than number.");
    remarks.innerHTML=`Your guess is Greater than number.`;
  }
  if(input.value==number){
    container.classList.add("hide");
    massege1.classList.remove("hide");
    count=0;
    remain.innerHtml=`Guess remaining:${10}`;
    remarks.innerHTML="";
  }
  remain.innerHTML=`Guess remaining:${10-count}`;
  prev.innerHTML=`Previous guess:${input.value}`;
  count++;
})
let button1=document.querySelector(".button1");
button1.addEventListener('click',()=>{
  massege.classList.add("hide");
  container.classList.remove("hide");
  let input=document.querySelector("#input1");
  input.value="";
  number=Math.floor(Math.random()*100+1);
  prev.innerHTML=`Previous guess:null`;
})
let button2=document.querySelector(".button2");
button2.addEventListener('click',()=>{
  massege1.classList.add("hide");
  container.classList.remove("hide");
  let input=document.querySelector("#input1");
  input.value="";
  number=Math.floor(Math.random()*100+1);
  prev.innerHTML=`Previous guess:null`;
})