let btn = document.querySelector(".btn");
btn.onclick=(evt)=>{
    console.log("the event was ",evt);
    console.log("the event type was ",evt.type);
    console.log("the event target was ",evt.target);
    console.log("the event x dist was ",evt.clientX);
    console.log("the event y dist was ",evt.clientY);
}