let btn = document.querySelector(".btn");
let body = document.body;

let dark = ()=>{
    body.style.color="white";
    body.style.backgroundColor="black";
    btn.onclick = light;
}
let light = ()=>{
    body.style.color="black";
    body.style.backgroundColor="white";
    btn.onclick = dark;
}
btn.onclick = dark;