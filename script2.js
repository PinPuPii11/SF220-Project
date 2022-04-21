Name = localStorage.getItem("myName");
document.getElementById("name").innerHTML = Name;

// Log Out
var logout = document.getElementById("logout");
logout.onclick = function(){
  localStorage.removeItem("myName");
  localStorage.removeItem("Subject");
  localStorage.removeItem("role");
  window.location = "index.html";
}

// Subject
const subject = [{quota:50,thName: "มธ.100 พลเมืองกับการลงมือแก้ปัญหา",enName: "TU100 Civic Engagement", code: "TU100", thDes:"ปลูกฝังจิตสํานึก บทบาท และหน้าที่ความรับผิดชอบของการเป็นสมาชิกที่ดีของสังคมในฐานะพลเมืองโลกผ่านกระบวนการหลากหลายวิธี เช่น การบรรยาย การอภิปรายกรณีศึกษาต่างๆ ดูงานเป็นต้น โดยนักศึกษาจะต้องจัดทําโครงการรณรงค์ เพื่อให้เกิดการรับรู้ หรือเกิดการเปลี่ยนแปลง ในประเด็นที่สนใจ", enDes: "Instillation of social conscience and awareness of one’s role and duties as a good global citizen. This is done through a variety of methods such as lectures, discussion of various case studies and field study outings. Students are required to organise a campaign to raise awareness or bring about change in an area of their interest.",section: ["760001","760002","760003"]},
{quota:50,thName: "มธ.102 ทักษะชีวิตทางสังคม",enName: "TU102 Social Life Skills", code: "TU102", thDes: "การดุแลสุขภาพตนเองแบบองค์รวม ทั้งทางด้านร่างกาย อารมณ์ สังคม และจิตวิญญาณ ซึ่งเป็นทักษะสำคัญที่จะช่วยให้ประสบความสำเร็จและใช้ชีวิตในสังคมอย่างเป็นสุข ด้วยการพัฒนาความสามารถในการดูแลสุขภาพทางกายการจัดการความเครียด การสร้างความมั่นคงทางอารมณ์ การเข้าใจตนเองและการปรับตัวเมื่อเผชิญกับปัญหาทางด้านจิตใจ อารมณ์ และสังคม การเข้าใจความหมายของสุนทรียศาสตร์ การได้รับประสบการณ์และความซาบซึ้งในความสัมพันธ์ระหว่างศิลปะกับมนุษย์ ในแขนงต่างๆ ทั้งทัศนศิลป์ ดนตรี ศิลปะการแสดง และสถาปัตยกรรม", enDes: "Holistic health care, addressing the physical ,emotional ,social ,and spiritual needs, which is considered. Important skills for success in leading a happy life in society. Students learn to develop their ability in physical health care to manage stress, build emotional security, understand themselves and adapt to psychological, emotional and social problems. Students also learn to understand the meaning of aesthetics, experiencing and appreciating the relationship between art and humanity in different fields, namely visual arts, music, performing arts and architecture.", section: ["760001","760002","760003"]},
{quota:50,thName: "มธ.109 นวัตกรรมกับกระบวนคิดผู้ประกอบการ",enName: "Innovation and Entrepreneurial Mindset", code: "TU109", thDes: "การประเมินความเสี่ยงและการสร้างโอกาสใหม่ การคิดและการวางแผนแบบผู้ประกอบการ การตัดสินใจและการพัฒนาธุรกิจ การสื่อสารเชิงธุรกิจและการสร้างแรงจูงใจอย่างมีประสิทธิภาพ การสร้างคุณค่าร่วมเพื่อสังคม", enDes: "Risk assessment and creating new opportunities. Thinking and planning as an entrepreneur. Decision making and entrepreneurial venture development. Business communication for delivering concept or initiative in an efficient, effective and compelling manner. Social shared value creation.", section: ["760001","760002","760003"]},
{quota:50,thName: "มธ.107 ทักษะดิจิทัลกับการแก้ปัญหา",enName: "TU107 Digital Skill and Problem Solving", code: "TU107", thDes: "ทักษะการคิดเชิงค านวณเพื่อการแก้ปัญหาและการพัฒนาโอกาสใหม่ด้านสังคมและเศรษฐกิจ ความสามารถในค้นหาและการเข้าถึงสารสนเทศได้อย่างมีประสิทธิภาพ การประเมินความน่าเชื่อถือของสารสนเทศ การกลั่นกรองและจัดการสารสนเทศอย่างเป็นระบบ การใช้และจรรยาบรรณด้านดิจิทัล การสื่อสารออนไลน์อย่างมือาชีพ", enDes: "Basic computational thinking skill for solving problems and developing new social and economic opportunities. Efficient access and search for information. Information reliability evaluation. Filtering and managing information systematically. Ethical digital usage and professional online communication.", section: ["760001","760002","760003"]},
{quota:50,thName: "วซ.210 การพัฒนาการเขียนโปรแกรมคอมพิวเตอร์ 1",enName: "SF210 Programming Skill Development 1", code: "SF210", thDes: "การเขียนโปรแกรมและการแก้ปัญหาด้วยภาษาไพธอน เน้นหลักการของการพัฒนาซอฟแวร์รูปแบบการเขียนโค้ด และการทดสอบ หัวข้อประกอบด้วย กระบวนค าสั่งและฟังก์ชั่น การวนซ้ำ การเรียกซ้ำ อาร์เรย์และเวกเตอร์ สตริง รูปแบบการดำเนินงานของการเรียกใช้กระบวนคำสั่งและฟังก์ชั่น ขั้นตอนวิธี ความผิดปกติ", enDes: "Programming and problem solving using Python. Emphasizes principles of software development, style, and testing. Topics include procedures and functions, iteration, recursion, arrays and vectors, strings, an operational model of procedure and function calls, algorithms, exceptions.", section: ["760001","760002","760003"]}, 
{quota:50,thName: "มธ.104 การคิด อ่าน และเขียนอย่างมีวิจารณญาณ", enName: "TU104 Critical Thinking, Reading, and Writing", code: "TU104", thDes: "พัฒนาทักษะการคิดอย่างมีวิจารณญาณผ่านการตั้งค าถาม การวิเคราะห์ การสังเคราะห์ และการประเมินค่า พัฒนาทักษะการอ่านเพื่อจับสาระสำคัญ เข้าใจจุดมุ่งหมาย ทัศนคติ สมมติฐาน หลักฐานสนับสนุนการใช้เหตุผลที่นำไปสู่ข้อสรุปของงานเขียน พัฒนาทักษะการเขียนแสดงความคิดเห็นอย่างมีเหตุผลและการเขียนเชิงวิชาการ รู้จักถ่ายทอดความคิด และเชื่อมโยงข้อมูลเข้ากับมุมมองของตนเอง รวมถึงสามารถอ้างอิงหลักฐานและข้อมูลมาใช้ในการสร้างสรรค์งานเขียนได้อย่างมีประสิทธิภาพ", enDes: "Development of critical thinking through questioning, analytical, synthetic and evaluation skills. Students learn how to read without necessarily accepting all the information presented in the text, but rather consider the content in depth, taking into account the objectives, perspectives, assumptions, bias and supporting evidence, as well as logic or strategies leading to the author’s conclusion. The purpose is to apply these methods to students’ own persuasive writing based on information researched from various sources, using effective presentation techniques.", section: ["760001","760002","760003"]},
{quota:50,thName: "ค.111 แคลคูลัสพื้นฐาน", enName: "MA111 Fundamentals of Calculus", code: "MA111", thDes:"อุปนัยเชิงคณิตศาสตร์ ระบบจำนวนและฟังก์ชันเบื้องต้น แคลคูลัสอนุพันธ์และปริพันธ์ของฟังก์ชันตัวแปรเดียว ลิมิตความต่อเนื่อง อนุพันธ์ และการประยุกต์อนุพันธ์ ปฏิยานุพันธ์ เทคนิคการหาปริพันธ์และการประยุกต์ปริพันธ์ ปริพันธ์ไม่ตรงแบบ อนุกรม ทฤษฎีของเทย์เลอร์ของฟังก์ชันพื้นฐาน การหาปริพันธ์เชิงตัวเลขเบื้องต้น หมายเหตุ : ไม่นับหน่วยกิตให้ผู้ที่กำลังศึกษาหรือสอบได้ ค.211 หรือ ค.216 หรือ ค.218 หรือ คป.101", enDes: "Mathematical induction, number systems and elementary functions, calculus of one variable functions, limit, continuity, the derivative and its applications, antiderivatives, techniques of integrations and its applications, improper integrals, series, Taylor’s Theorem for basic functions, numerical integration. Note: There is no credit for students who are currently taking or have earned credits of MA211 or MA216 or MA 218 or AM101", section: ["760001","760002","760003"]}];


// ---------------- Register Part (Student) ---------------- //
// Loop output for each subject
const parentCard = document.getElementById("parentCard");
parentCard.innerHTML = subject.map(({code, enName}) => `
      <div class='subbutton' onclick="checksubject('${code}')" >
        <div class="col-sm-4">
          <div class="card text-center">
            <div class="coursecode">
              <h2 id="coursecode">${code}</h2>
            </div>
            <div class="coursename">
              <h4 id="course_name">${enName.substr(5, enName.length)}</h4>
            </div>
            <p class="quota" id="quotanumber" >${showquota(code)}</p>
          </div>
        </div>
      </div>`).join('');

// Set info to each subject.

// Check subject.
for(let i=0;i<subject.length;i++){
  if(localStorage.Subject == subject[i].code){
    var coursedetailTH = subject[i].thDes;
    var coursedetailEN = subject[i].enDes;
    break;
  }
}
document.getElementById("thDes").innerHTML = localStorage.getItem(coursedetailTH);
document.getElementById("enDes").innerHTML = coursedetailEN;

// Check subject.
function checksubject(sub){
  subname = document.querySelector("#detail");
  localStorage.setItem("Subject", sub);
  if(localStorage.role == "Student"){
    window.location = "quotaDetailStudent.html";
  }
  else {
    window.location = "editQuotaAdmin.html";
  }
}

// Subject name assign when page has jumped
subname = localStorage.getItem("Subject");
document.getElementById("detail").innerHTML = subname;

// Quota will be assign when page has jumped
var quota = (localStorage.getItem("Subject"))+ "quota";
var quotaA = localStorage.getItem("Subject") + "quotaA";
var registered = localStorage.getItem("Subject") + "registered";
var quanquota = localStorage.getItem(quota);
var quotamodel = `${localStorage.getItem(registered)} / ${quanquota}`;
document.getElementById("showquota").innerHTML = "Quota "+ quotamodel;

// Quota showed on card//
function showquota(code){
  subquota = code + "quota";
  subregis = code + "registered";
  Subjectquota = localStorage.getItem(subquota);
  Subjectregistered = localStorage.getItem(subregis);
  return `${Subjectregistered}/${Subjectquota}`;
}



// When click at Course Register, reset subject.
let barCourseRegister = document.getElementById("barCourseRegister");
barCourseRegister.onclick = function(){
  localStorage.setItem("Subject",'');
}

// When click register button
function regis(){
  registering = Name + localStorage.getItem("Subject");
  localStorage.setItem(registering, "Registered");
  checkquota();
  location.reload();
  console.log(localStorage);
}

// Alert confirm register
function checker(){
    var result = confirm("Please click 'okay' to register.");
    if(result == false){
      event.preventDefault();
    }
    else{
      regis();
      document.getElementById("registerButton").setAttribute("disable","disable");
    }
  }

// Disable the register button after click
var registerButton = getElementById("registerButton");
registerButton.addEventListener('click', () => {
  registerButton.setAttribute('disabled', 'disabled');
});
//   
//   } else {
//     registerButton.removeAttribute('disabled', 'disabled');
//   }
// });


// Variable for quota

//Check quota
// function checkquota(){
//   for(i = 0;i<localStorage.length;i++){
//     if(localStorage.key(i).includes(Subject)){
      
//     }
//   }
// }

// ---------------- My Course Page (Student) ---------------- //

var clearButton = getElementById("clearButton");
clearButton.addEventListener('click', () => {
  clearsub();
});

function clearsub(sub) {
  localStorage.setItem("Subject",sub);
  registering = Name + localStorage.getItem("Subject");
  localStorage.setItem(registering, "Clear");

  quotaA = localStorage.getItem("Subject") + "quotaA";
  registered = localStorage.getItem("Subject") + "registered";
  var decreasequota = Number(localStorage.getItem(quotaA)) + 1;
  var increasequota = Number(localStorage.getItem(registered)) - 1 ;
  var showcard = document.getElementById("showcard1");
  showcard.setAttribute("style","display: none;")
  localStorage.setItem(quotaA, decreasequota);
  localStorage.setItem(registered , increasequota);
}

// Clear Card 
var clearButton = document.querySelector("#clearButton");
clearButton.onclick = function(){
  checker2();
}
function checker2(sub){
  var result = confirm("Please click 'okay' to remove.");
  if(result == false){
    event.preventDefault();
  }
  else{
    clearsub(sub);
    Visibility("showcard1",'none');
    document.getElementById("clearButton").setAttribute("disable","disable");
  }
}

// Set subject card disapear 
function Visibility(id, visible){
  document.getElementById(id).style.display = visible;
}




// ------------------------- Admin --------------------------- //

//Check quota, Edit quota, Do every fking thing about quota//
function checkquota(){
    quotaA = localStorage.getItem("Subject") + "quotaA";
    registered = localStorage.getItem("Subject") + "registered";
    var decreasequota = Number(localStorage.getItem(quotaA)) - 1;
    var increasequota = Number(localStorage.getItem(registered)) + 1 ;
    localStorage.setItem(quotaA, decreasequota);
    localStorage.setItem(registered , increasequota);
  
  }
  
  // Assign Subject Info to localStorage **This is a part of Admin//
  function assign(){
    for(i = 0; i<subject.length; i++){
      registerquota = subject[i].code + "registered";
      localname = subject[i].code + "quota";
      localnameA = subject[i].code + "quotaA";
      localStorage.setItem(registerquota, 0);
      localStorage.setItem(localnameA, subject[i].quota);
      localStorage.setItem(localname, subject[i].quota);
    }
    console.log(localStorage);
  }

// click + button to go to create course page // 
function gotoaddcourse() {
  window.location = "addQuota.html" ;
}


// ---------------- Student Name ---------------- //

const stuName = [{sName: "เกวลิน กลิ่นหอม", sID: 6400000001},
                 {sName: "คะนึงนิช จิตดี", sID: 6400000002},
                 {sName: "มัญชุสา ธรรมหงส์", sID: 6400000003},
                 {sName: "ปุณิกา พชระหงส์", sID: 6400000004},
                 {sName: "ปภิณวิทย์ หงส์พันธุ์", sID: 6400000005},
                 {sName: "ทนงทวย คงควรคอย", sID: 6400000006},
                 {sName: "ณภัทร กิตประเสริฐ", sID: 6400000007},
                 {sName: "พบธรรม นำจรรยา", sID: 6400000008}];

// Loop Student List to get students' name and ID
function appendStuName(stuName) {
  var studentList = document.getElementById("stuList");
  for (var i = 0; i< stuName.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = [i + 1] + ". " + stuName[i].sName + stuName[i].sID;
    studentList.appendChild(div);
  }
}
