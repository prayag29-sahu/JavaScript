function showmsg(){
    var msg = document.getElementById("message");
    msg.innerHTML = "After 2 sec";
}
function delaymsg(){
    setTimeout(showmsg,2000);
}