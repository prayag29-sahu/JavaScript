function changetext(){
    // var text = document.getElementsByClassName("heading");
    // for (var i = 0; i < text.length; i++) {
    //             text[i].textContent = "new text by class";
    //             text[i].style.color = "red";
    //     }

    var text = document.getElementsByClassName("heading")[0];
    text.textContent = "new text by class";
    text.style.color = "red";
}