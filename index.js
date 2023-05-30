function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
   
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


function open_close() {
    let x = document.getElementById("ethicalIssues");
    let y = document.getElementById("EI");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        y.innerHTML = "<i class=\"fa fa-caret-down\"></i>Ethical issues";
    } else {
        x.className = x.className.replace(" w3-show", "");
        y.innerHTML = "<i class=\"fa fa-caret-right\"></i> Ethical issues";
    }
}
function validate() {

}