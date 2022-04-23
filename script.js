const keyBoard = document.getElementById("username")
const keyBoard2 = document.getElementById("form-input form_input-error")

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

// Login system //
var userInfo = [{username: "001", password: "ajarnjack", role: "Admin", name: "AjarnJack", lastname:"", thName: "วีรชัย อโณทัยไพบูลย์ "},
                {username: "6410742156", password: "001", role: "Student", name: "Nutchapon", lastname: "Kitkram", thName: "ณัชพล กิตคราม"},
                {username: "6410742313", password: "002", role: "Student", name: "Kanpitcha", lastname: "Hong-ek", thName: "กานต์พิชชา หงส์เอก"},
                {username: "6410742636", password: "003", role: "Student", name: "Punyanuch", lastname: "Pocharapongpan", thName:"ปุณยนุช พชระพงศ์พันธุ์"},
                {username: "6410742651", password: "004", role: "Student", name: "Peerapat", lastname: "Suttiprasit", thName:"พีรพัฒน์ สุทธิประสิทธิ์"},
                {username: "6410742685", password: "005", role: "Student", name: "Mallika", lastname: "Thamajit", thName:"มัลลิกา ธรรมจิต"}];

var Name = '';
var state = 'Undefine';
var count = 0

function checkInfo(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("form-input form_input-error").value;
  
  for(var i = 0; i < userInfo.length; i++){
    
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
    count = 0;
  }
  else{
    Name = userInfo[count].name + " " + userInfo[count].lastname;
    localStorage.setItem("myName",Name);
    checkRole();
  }
}

function checkRole(){
  var role = userInfo[count].role;
  if(role=="Admin"){
    localStorage.setItem("role","Admin");
    window.location = "manageQuotaAdmin.html";
  }
  else{
    localStorage.setItem("role","Student");
    window.location = "myQuotaStudent.html";
  }
}
