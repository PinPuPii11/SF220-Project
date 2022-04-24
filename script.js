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
var userInfo = [{username: "001", password: "ajarnjack", role: "Admin", name: "AjarnJack", thName: "วีรชัย อโณทัยไพบูลย์ "},
                {username: "6400000001", password: "001", role: "Student", name: "Nutchapon Kitkram", thName: "ณัชพล กิตคราม"},
                {username: "6400000002", password: "002", role: "Student", name: "Kanpitcha Hong-ek", thName: "กานต์พิชชา หงส์เอก"},
                {username: "6400000003", password: "003", role: "Student", name: "Punyanuch Pocharapongpan", thName:"ปุณยนุช พชระพงศ์พันธุ์"},
                {username: "6400000004", password: "004", role: "Student", name: "Peerapat Suttiprasit", thName:"พีรพัฒน์ สุทธิประสิทธิ์"},
                {username: "6400000005", password: "005", role: "Student", name: "Mallika Thamajit", thName:"มัลลิกา ธรรมจิต"}];

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
    Name = userInfo[count].name;
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
