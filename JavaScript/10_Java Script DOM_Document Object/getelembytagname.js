function changeColor() {
    var heading = document.getElementsByTagName("h2");
    for (var i = 0; i < heading.length; i++) {
        heading[i].style.color = "red";
    }
}
