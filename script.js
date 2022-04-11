const keyBoard = document.getElementById("username")
const keyBoard2 = document.getElementById("form-input form_input-error")
//var username =

keyBoard.addEventListener('keydown', e =>{
  if(e.keyCode === 13){
    $('.form_input').focus()
  }
})

keyBoard2.addEventListener('keydown', e =>{
  if(e.keyCode === 13){
    $('.form_button').click()
    //$()
  }
})//Press "enter" to perform click logIn button

// ----------------------------------------------------- //

var userInfo = [{username:"001",password:"ajarnjack",role:"Admin",name:"AjarnJack"},
                {username:"641",password:"001",role:"Student",name:"Nutchapon"},
                {username:"641",password:"002",role:"Student",name:"Karnpitcha"},
                {username:"641",password:"003",role:"Student",name:"Punyanuch"},
                {username:"641",password:"004",role:"Student",name:"Peerapat"},
                {username:"641",password:"005",role:"Student",name:"Mallika"}];
var Name = '';
var state = 'Undefine';
var count = 0

function checkInfo(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("form-input form_input-error").value;
  
  for(var i = 0; i < userInfo.length;i++){
    
    if(username == userInfo[i].username && password == userInfo[i].password){
      state = 'Logged In';
      break;
    }
    count += 1;
    
  }
  document.getElementById("username").value = '';
  document.getElementById("form-input form_input-error").value = '';
  
  if(state == 'Undefine'){
    console.log(state);
    document.getElementById("error_text").style.color = "red";
    document.getElementById("error_text").innerHTML = "***Incorrect username or password.***";
  }
  else{
    Name = userInfo[count].name;
    localStorage.setItem("myName",Name);
    checkRole();
  }
}

function checkRole(){
  var role = userInfo[count].role;
  if(role=="Admin"){
    window.location = "mainpageAdmin.html";
  }
  else{
    window.location = "mainpageStudent.html";
  }
}