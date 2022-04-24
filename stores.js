// Apply Course
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

// Delete Course
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

// Generate Subject
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
