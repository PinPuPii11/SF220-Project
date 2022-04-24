// ---------------- Student Name ---------------- //


// Example of student 
var stdName = [{sName: "เกวลิน กลิ่นหอม", sID: 6400000001},
                 {sName: "คะนึงนิช จิตดี", sID: 6400000002},
                 {sName: "มัญชุสา ธรรมหงส์", sID: 6400000003},
                 {sName: "ปุณิกา พชระหงส์", sID: 6400000004},
                 {sName: "ปภิณวิทย์ หงส์พันธุ์", sID: 6400000005},
                 {sName: "ทนงทวย คงควรคอย", sID: 6400000006},
                 {sName: "ณภัทร กิตประเสริฐ", sID: 6400000007},
                 {sName: "พบธรรม นำจรรยา", sID: 6400000008}];

                 
// function builtTable(data) {
//   var table = document.getElementById('stdList')
//   for (var i = 0; i < data.length; i++) {
//     var row = `<tr>
//               <td>${data[i].sName}</td>
//               <td>${data[i].sID}</td>
//               </tr>`
//     table.innerHTML += row;
//   }
//   console.log(Object.keys(stdName))
// }

// builtTable(stdName);

// function showRequested() {
//   var reqStdList = []
//   for (let i = 0; i < localStorage.length; i++){
//     if (localStorage.getItem(localStorage.key(i)) == "Registered" && localStorage.key(i).includes(localStorage.getItem("Subject"))){
//       reqName = localStorage.key(i).replace(Name,"");
//       reqenName = localStorage.key(i).replace(reqName, "");
//       for (let j = 0;j<userInfo.length;j++){
//         if (reqenName == userInfo[j].name){
//           StdId = userInfo[j].username;
//           reqThName = userInfo[j].thName;
//           break;
//         }
//       }
//       reqStdList.push({sName:reqThName, sID: StdId});
//     }
//     // console.log(reqStdList);
//   }
//   builtTable(reqStdList);
// }

// // Loop List of requested students into table 
// function builtTable(data) {
//   var table = document.getElementById('stdList');
//   table.innerHTML = reqStdList.map({sName, sID});
//   for (var i = 0; i < data.length; i++) {
//     var row = `<tr>
//               <td>${data[i].sName}</td>
//               <td>${data[i].sID}</td>
//               </tr>`
//   table.innerHTML += row;
//   }
// }

// console.log(Object.keys(reqStdList))
//showRequested();
// builtTable(reqStdList);


function applycourse(){
  checker4 = confirm("Click 'okay' to apply course")
  if (checker4 == false){
    event.preventDefault();
  }
  else {
    var subjectList = localStorage.getItem("SubList");
    var subListArr = subjectList.split(",");
    CourseName = document.getElementById("CourseName").value;
    CourseCode = document.getElementById("CourseCode").value;
    CDTH = document.getElementById("CDTH").value;
    CDEN = document.getElementById("CDEN").value;
    NumofQuota = document.getElementById("NumofQuota").value;
    quota = CourseCode + "quota";
    quotaA = CourseCode + "quotaA";
    registered = CourseCode + "registered";
    CourseENnamekey = CourseCode + "ENname";
    CourseDetailth = CourseCode + "detailTH";
    CourseDetailen = CourseCode + "detailEN";
    localStorage.setItem(CourseENnamekey,CourseName);
    localStorage.setItem(quota, NumofQuota);
    localStorage.setItem(quotaA, NumofQuota)
    localStorage.setItem(registered, 0);
    localStorage.setItem(CourseDetailth, CDTH);
    localStorage.setItem(CourseDetailen, CDEN);
    subListArr.push(CourseCode);
    subjectList = subListArr.join(",");
    localStorage.setItem("SubList",subjectList);
    window.location = "manageQuotaAdmin.html";
  }
}

function deletecourse(){
  subname = localStorage.getItem("Subject");
  var resq = confirm("press 'okay' to delete this course");
  if (resq == false){
    event.preventDefault();
  }
  else {
    for(i=0 ; i<localStorage.length;i++){
      if(localStorage.key(i).includes(subname)){
        localStorage.removeItem(localStorage.key(i));
      }
    }
    window.location = "manageQuotaAdmin.html";
  }
}

function generatefkingsubj(){

  subArr = [];
  subjectList = localStorage.getItem("SubList");
  subListArr = subjectList.split(",");
  for (let i = 0; i < subListArr.length; i++){
    for (let j = 0; j < localStorage.length; j++){
      if (localStorage.key(j).includes(subListArr[i]) && localStorage.key(j).includes("ENname")){
        subcode = localStorage.key(j).replace("ENname","");
        SubnameEN = subcode + "ENname";
        nameEN = localStorage.getItem(SubnameEN);
        subArr.push({Code:subcode,NameEN:nameEN});
      }
    }
  }

  const parentCard = document.getElementById("parentCard");
  parentCard.innerHTML = subArr.map(({Code, NameEN}) => `
    <div class='subbutton' onclick="checksubject('${Code}')" >
      <div class="col-sm-4">
        <div class="card text-center">
          <div class="coursecode">
            <h2 id="coursecode">${Code}</h2>
          </div>
          <div class="coursename">
            <h4 id="course_name">${NameEN}</h4>
          </div>
          <p class="quota" id="quotanumber" >${showquota(Code)}</p>
        </div>
      </div>
    </div>`).join('');
}
generatefkingsubj();
