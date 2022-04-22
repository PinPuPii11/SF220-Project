// card Mycourse
const CardMycourse = document.getElementById("CardMycourse");
CardMycourse.innerHTML = subject.map(({code, enName}) => `
          <div class="col-sm-4" id="${code+'id'}">
            <div class="card text-center">
              <div class="coursecode">
                <h2 id="coursecode">${code}</h2>
              </div>
              <div class="coursename">
                <h4 id="course_name">${enName.substr(5, enName.length)}</h4>
              </div>
              <button onclick="checker2(${code},${code+'id'})" id="clearButton" type="button" >Clear</button>
              <p class="q" id="quotanumber">${showquota(code)}</p>
            </div>
          </div>`).join('');

// ---------------- My Course Page (Student) ---------------- //

// var clearButton = getElementById("clearButton");
// clearButton.addEventListener('click', () => {
//   clearsub();
// });

function clearsub(sub,id) {
  localStorage.setItem("Subject",sub);
  registering = Name + localStorage.getItem("Subject");
  localStorage.setItem(registering, "Clear");

  quotaA = localStorage.getItem("Subject") + "quotaA";
  registered = localStorage.getItem("Subject") + "registered";
  var decreasequota = Number(localStorage.getItem(quotaA)) + 1;
  var increasequota = Number(localStorage.getItem(registered)) - 1 ;
  var showcard = document.getElementById(id);
  showcard.setAttribute("style","display: none;");
  localStorage.setItem(quotaA, decreasequota);
  localStorage.setItem(registered , increasequota);
}

// Clear Card 
// var clearButton = document.querySelector("#clearButton");
// clearButton.onclick = function(){
//   checker2();
// }
function checker2(sub,id){
  var result = confirm("Please click 'okay' to remove.");
  if(result == false){
    event.preventDefault();
  }
  else{
    clearsub(sub,id);
    Visibility(id,'none');
    //document.getElementById("clearButton").setAttribute("disable","disable");
  }
}

// Set subject card disapear 
function Visibility(id, visible){
  document.getElementById(id).style.display = visible;
}