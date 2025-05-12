function changetext(){
    var text = document.getElementsByClassName("heading");
    for (var i = 0; i < text.length; i++) {
                text[i].textContent = "new text by class";
        }
}