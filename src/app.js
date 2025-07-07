import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



                                         
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function numbers1 (i,j) {
          return Math.floor(Math.random()* (j-i)+i);
}

function numbers2(anyArray){
          let j=anyArray.length-1;
          let i=0;
          let random= numbers1(i,j);
          return anyArray [random];
}


window.onload = function() {
console.log("Hello Rigo from the console!");

  document.querySelector('#excuse').innerHTML = numbers2(who) +" " +numbers2(action) + " " + numbers2(what) + " " + numbers2(when)

};
