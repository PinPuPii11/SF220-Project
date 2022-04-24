function Clearcardcourse() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}

function clearsub(sub) {
  localStorage.setItem("Subject",sub);
  registering = Name + localStorage.getItem("Subject");
  localStorage.setItem(registering, "Clear");

  quotaA = localStorage.getItem("Subject") + "quotaA";
  registered = localStorage.getItem("Subject") + "registered";
  var decreasequota = Number(localStorage.getItem(quotaA)) + 1;
  var increasequota = Number(localStorage.getItem(registered)) - 1 ;
  var cardid = sub + "id";
  Clearcardcourse();
  localStorage.setItem(quotaA, decreasequota);
  localStorage.setItem(registered , increasequota);
}

//Confirm to remove//
function checker2(sub){
  var result = confirm("Please click 'okay' to remove.");
  if(result == false){
    event.preventDefault();
  }
  else{
    clearsub(sub);

  }
}
// Set subject card disapear 
function Visibility(id, visible){
  document.getElementById(id).style.display = visible;
}