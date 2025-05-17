let btn = document.querySelector(".btn");
let func = ()=>{
    console.log("hello");
    btn.style.backgroundColor="yellow";
    btn.style.color="black";
}
// add function
btn.addEventListener("click",func)
// remove function
btn.removeEventListener("click",func)