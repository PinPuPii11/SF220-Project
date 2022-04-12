Name = localStorage.getItem("myName");
var resetValue = 0;
document.getElementById("name").innerHTML = Name;

const subject = {
  "TU100": {name: "Civic Engagement", code: "TU100", thDes:"ปลูกฝังจิตสํานึก บทบาท และหน้าที่ความรับผิดชอบของการเป็นสมาชิกที่ดีของสังคมในฐานะพลเมืองโลกผ่านกระบวนการหลากหลายวิธี เช่น การบรรยาย การอภิปรายกรณีศึกษาต่างๆ ดูงานเป็นต้น โดยนักศึกษาจะต้องจัดทําโครงการรณรงค์ เพื่อให้เกิดการรับรู้ หรือเกิดการเปลี่ยนแปลง ในประเด็นที่สนใจ", enDes: "Instillation of social conscience and awareness of one’s role and duties as a good global citizen. This is done through a variety of methods such as lectures, discussion of various case studies and field study outings. Students are required to organise a campaign to raise awareness or bring about change in an area of their interest.", section: ["760001","760002","760003"]},
  "TU102": {name: "Social Life Skills", code: "TU102", thDes: "การดุแลสุขภาพตนเองแบบองค์รวม ทั้งทางด้านร่างกาย อารมณ์ สังคม และจิตวิญญาณ ซึ่งเป็นทักษะสำคัญที่จะช่วยให้ประสบความสำเร็จและใช้ชีวิตในสังคมอย่างเป็นสุข ด้วยการพัฒนาความสามารถในการดูแลสุขภาพทางกายการจัดการความเครียด การสร้างความมั่นคงทางอารมณ์ การเข้าใจตนเองและการปรับตัวเมื่อเผชิญกับปัญหาทางด้านจิตใจ อารมณ์ และสังคม การเข้าใจความหมายของสุนทรียศาสตร์ การได้รับประสบการณ์และความซาบซึ้งในความสัมพันธ์ระหว่างศิลปะกับมนุษย์ ในแขนงต่างๆ ทั้งทัศนศิลป์ ดนตรี ศิลปะการแสดง และสถาปัตยกรรม", enDes: "Holistic health care, addressing the physical ,emotional ,social ,and spiritual needs, which is considered. Important skills for success in leading a happy life in society. Students learn to develop their ability in physical health care to manage stress, build emotional security, understand themselves and adapt to psychological, emotional and social problems. Students also learn to understand the meaning of aesthetics, experiencing and appreciating the relationship between art and humanity in different fields, namely visual arts, music, performing arts and architecture.", section: ["760001","760002","760003"]},
  "TU109": {name: "Innovation and Entrepreneurial Mindset", code: "TU109", thDes: "การประเมินความเสี่ยงและการสร้างโอกาสใหม่ การคิดและการวางแผนแบบผู้ประกอบการ การตัดสินใจและการพัฒนาธุรกิจ การสื่อสารเชิงธุรกิจและการสร้างแรงจูงใจอย่างมีประสิทธิภาพ การสร้างคุณค่าร่วมเพื่อสังคม", enDes: "Risk assessment and creating new opportunities. Thinking and planning as an entrepreneur. Decision making and entrepreneurial venture development. Business communication for delivering concept or initiative in an efficient, effective and compelling manner. Social shared value creation.", section: ["760001","760002","760003"]},
  "TU107": {name: "Digital Skill and Problem Solving", code: "TU107", thDes: "ทักษะการคิดเชิงค านวณเพื่อการแก้ปัญหาและการพัฒนาโอกาสใหม่ด้านสังคมและเศรษฐกิจ ความสามารถในค้นหาและการเข้าถึงสารสนเทศได้อย่างมีประสิทธิภาพ การประเมินความน่าเชื่อถือของสารสนเทศ การกลั่นกรองและจัดการสารสนเทศอย่างเป็นระบบ การใช้และจรรยาบรรณด้านดิจิทัล การสื่อสารออนไลน์อย่างมือาชีพ", enDes: "Basic computational thinking skill for solving problems and developing new social and economic opportunities. Efficient access and search for information. Information reliability evaluation. Filtering and managing information systematically. Ethical digital usage and professional online communication.", section: ["760001","760002","760003"]},
  "SF210": {name: "Programming Skill Development 1", code: "SF210", thDes:"การเขียนโปรแกรมและการแก้ปัญหาด้วยภาษาไพธอน เน้นหลักการของการพัฒนาซอฟแวร์รูปแบบการเขียนโค้ด และการทดสอบ หัวข้อประกอบด้วย กระบวนค าสั่งและฟังก์ชั่น การวนซ้ำ การเรียกซ้ำ อาร์เรย์และเวกเตอร์ สตริง รูปแบบการดำเนินงานของการเรียกใช้กระบวนคำสั่งและฟังก์ชั่น ขั้นตอนวิธี ความผิดปกติ", enDes: "Programming and problem solving using Python. Emphasizes principles of software development, style, and testing. Topics include procedures and functions, iteration, recursion, arrays and vectors, strings, an operational model of procedure and function calls, algorithms, exceptions.", section: ["760001","760002","760003"]}};

function Logout(){
  localStorage.setItem("myName", resetValue);
  window.location = "index.html";
  
}

function gotoSubject1() {
  localStorage.setItem("Code", "TU100");
  document.getElementById("detail").innerHTML = subject.TU100.thDes;
  //window.location = "registerDetailStudent.html";
}

function gotoSubject2() {
  window.location = "registerDetailStudent.html";
}

function gotoSubject3() {
  window.location = "registerDetailStudent.html";
}

function gotoSubject4() {
  window.location = "registerDetailStudent.html";
}


if('TU100' == localStorage.Code){
  document.getElementById("detail").innerHTML = subject.TU100.thDes;