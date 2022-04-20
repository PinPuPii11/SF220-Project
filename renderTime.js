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