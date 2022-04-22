// ---------------- Student Name ---------------- //

var stdName = [{sName: "เกวลิน กลิ่นหอม", sID: 6400000001},
                 {sName: "คะนึงนิช จิตดี", sID: 6400000002},
                 {sName: "มัญชุสา ธรรมหงส์", sID: 6400000003},
                 {sName: "ปุณิกา พชระหงส์", sID: 6400000004},
                 {sName: "ปภิณวิทย์ หงส์พันธุ์", sID: 6400000005},
                 {sName: "ทนงทวย คงควรคอย", sID: 6400000006},
                 {sName: "ณภัทร กิตประเสริฐ", sID: 6400000007},
                 {sName: "พบธรรม นำจรรยา", sID: 6400000008}];

                 
function builtTable(data) {
  var table = document.getElementById('stdList')
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
              <td>${data[i].sName}</td>
              <td>${data[i].sID}</td>
              </tr>`
    table.innerHTML += row;
  }
  console.log(Object.keys(stdName))
}

builtTable(stdName);


function applycourse(){
  CourseName = document.getElementById("CourseName").value;
  CourseCode = document.getElementById("CourseCode").value;
  CDTH = document.getElementById("CDTH").value;
  CDEN = document.getElementById("CDEN").value;
  NumofQuota = document.getElementById("NumofQuota").value;
  quota = CourseCode + "quota";
  CourseDetailth = CourseCode + "detailTH";
  CourseDetailen = CourseCode + "detailEN";
  localStorage.setItem(quota, NumofQuota);
  localStorage.setItem(CourseDetailTH, CDTH);
  localStorage.setItem(CourseDetailEN, CDEN);
  
}
