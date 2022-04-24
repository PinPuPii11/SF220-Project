var userInfo = [{username: "001", password: "ajarnjack", role: "Admin", name: "AjarnJack", thName: "วีรชัย อโณทัยไพบูลย์ "},
                {username: "6400000001", password: "001", role: "Student", name: "Nutchapon Kitkram", thName: "ณัชพล กิตคราม"},
                {username: "6400000002", password: "002", role: "Student", name: "Kanpitcha Hong-ek", thName: "กานต์พิชชา หงส์เอก"},
                {username: "6400000003", password: "003", role: "Student", name: "Punyanuch Pocharapongpan", thName:"ปุณยนุช พชระพงศ์พันธุ์"},
                {username: "6400000004", password: "004", role: "Student", name: "Peerapat Suttiprasit", thName:"พีรพัฒน์ สุทธิประสิทธิ์"},
                {username: "6400000005", password: "005", role: "Student", name: "Mallika Thamajit", thName:"มัลลิกา ธรรมจิต"}];


function CFnumQuota(){
    var result = confirm("Please click 'okay' to set new number of quota.");
    if (result == false){
      event.preventDefault();
    }
    else {
        var newquota = document.getElementById("numQbox").value;
        var Subname = localStorage.getItem("Subject") + "quota";
        localStorage.setItem(Subname, newquota);
        location.reload();
    }
} 

function showRequested() {
  var reqStdList = []
  for (let i = 0; i < localStorage.length; i++){
    if (localStorage.getItem(localStorage.key(i)) == "Registered" && localStorage.key(i).includes(localStorage.getItem("Subject"))){
      subName = localStorage.getItem("Subject");
      reqenName = localStorage.key(i).replace(subName, "");
      for (let j = 0;j<userInfo.length;j++){
        if (reqenName == userInfo[j].name){
          StdId = userInfo[j].username;
          reqThName = userInfo[j].thName;
          break;
        }
      }
      reqStdList.push({sName: reqThName, sID: StdId});
    }
  }
  builtTable(reqStdList);
}

// Loop List of requested students into table 
function builtTable(data) {
  var table = document.getElementById('stdList');
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
              <td>${data[i].sName}</td>
              <td>${data[i].sID}</td>
              </tr>`
  table.innerHTML += row;
  }
}
showRequested();