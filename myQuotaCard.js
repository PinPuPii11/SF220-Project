var subArr = []
for (let i = 0; i < localStorage.length; i++){
  if (localStorage.getItem(localStorage.key(i)) == "Registered" && localStorage.key(i).includes(Name)){
    subcode = localStorage.key(i).replace(Name,"");
    SubnameEN = subcode + "ENname";
    nameEN = localStorage.getItem(SubnameEN);
    subArr.push({Code:subcode,NameEN:nameEN});
  }
}

const CardMycourse = document.getElementById("CardMycourse");
CardMycourse.innerHTML = subArr.map(({Code, NameEN}) => `  
    <div class="col-sm-4" id="${Code}id">
      <div class="card text-center">
        <div class="coursecode">
          <h2 id="coursecode">${Code}</h2>
          </div>
          <div class="coursename">
            <h4 id="course_name">${NameEN}</h4>
          </div>
        <input type="button" value="Clear" onclick="checker2('${Code}')">
        <p class="q" id="quotanumber">${showquota(Code)}</p>
      </div>
    </div>`).join('');

    //</div>`).join('');
    
// card Mycourse//
{/* <button onclick="checker2('${code}','${code+'id'}')" id="clearButton" type="button" >Clear</button> */}

// ---------------- My Course Page (Student) ---------------- //

