// Equal both values and type
let a = 10;
let b = 10;
if(a===b){
    console.log(true);
}else {
    console.log(false);
}
// true

let c = 10;
var d = 10;
if(c===d){
    console.log(true);
}else {
    console.log(false);
}
// true

let e = 10;
const f = 10;
if(e===f){
    console.log(true);
}else {
    console.log(false);
}
// true

let g = 10;
const h = "10";
if(g===h){
    console.log(true);
}else {
    console.log(false);
}
// false

let i = "10";
const j = "10";
if(i===j){
    console.log(true);
}else {
    console.log(false);
}
// true