//renderTime//
function renderTime() {
  var mydate = new Date();
  var year = mydate.getYear();
      if(year < 1000){
          year += 1900
      }
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  var dayarray = new Array("วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์")
  var montharray = new Array("มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม")
        
  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
      if(h == 24){
        h = 0;   
      }
      else if(h > 12){
        h = h - 0;
      }
      if(h < 10){
        h = "0" + h;
      }
      if(m < 10){
        m = "0" + m;
      }
      if(s < 10){
        s = "0" + s;
      }
      var myClock = document.getElementById("clockDisplay");
      myClock.textContent = " " +dayarray[day]+"ที่"+" "+daym+" "+montharray[month]+" "+(year+543)+" | " +h+":"+m+":"+s;
      myClock.innerText = " " +dayarray[day]+"ที่"+" "+daym+" "+montharray[month]+" "+(year+543)+" | " +"เวลา "+h+":"+m+":"+s;
      setTimeout("renderTime()",1000);

}
renderTime();

//if reach quota limit, this fn will disable registerbtn//
function checklimit(){
  var quotaA = localStorage.getItem("Subject") + "quotaA";
  if(localStorage.getItem(quotaA) == "0"){
    document.getElementById("alert_fullQuota").style.color = "red";
    document.getElementById("alert_fullQuota").innerHTML = "This Course is already full";
    document.getElementById("registerButton").disabled = true;
  }
  else{
    document.getElementById("alert_fullQuota").innerHTML = "This course is available";
  }
}
checklimit();

// Subject name assign when page has jumped
var subname = localStorage.getItem("Subject");
document.getElementById("detail").innerHTML = subname;
// Course detail inner
var enDES = subname + "detailTH";
var thDES = subname + "detailEN";
var coursedetailEN = localStorage.getItem(enDES);
var coursedetailTH = localStorage.getItem(thDES);
document.getElementById("thDes").innerHTML = coursedetailTH;
document.getElementById("enDes").innerHTML = coursedetailEN;