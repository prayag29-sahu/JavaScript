let btn = document.querySelector(".btn");
let body = document.body;
btn.onclick = ()=>{
    console.log("btn was clicked");
    let a=10;
    let b=10;
    console.log(a+b);
    body.style.backgroundColor="black";
}
btn.ondblclick = ()=>{
    console.log("btn was clicked");
    body.style.backgroundColor="yellow";
}
let box = document.querySelector(".box");

box.onmouseover = ()=>{
    box.style.backgroundColor="yellow";
    box.innerText = "Hover Box";
}