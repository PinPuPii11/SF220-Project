function CFnumQuota(){
    var result = confirm("Please click 'okay' to set new number of quota.");
    if(result == false){
      event.preventDefault();
    }
    else{
        var newquota = document.getElementById("numQbox").value;
        var Subname = localStorage.getItem("Subject") + "quota";
        localStorage.setItem(Subname, newquota);
        newquota = '';
    }
} 