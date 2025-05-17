// let box1 = document.getElementsByClassName("box")[0];
// box1.textContent="box 1";
// let box2 = document.getElementsByClassName("box")[1];
// box2.textContent="box 2";
// let box3 = document.getElementsByClassName("box")[2];
// box3.textContent="box 3";

// let divs = document.querySelectorAll(".box");
// divs[0].innerText="box 1";
// divs[1].innerText="box 2";
// divs[2].innerText="box 3";

let divs = document.querySelectorAll(".box");
let i=1;
for(div of divs){
    div.innerText=`box ${i}`;
    i++;
}
