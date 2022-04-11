Name = localStorage.getItem("myName");
var resetValue =0;
localStorage.setItem("myName", resetValue);
document.getElementById("name").innerHTML = Name;

function Logout(){
    window.location = "index.html"
}