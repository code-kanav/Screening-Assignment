var jsonData;

function mod() {
  if (sessionStorage.getItem("emailId")) {
    ReadJson(displayJson);
  } else {
    window.location = "./index.html";
  }
  function ReadJson(callback) {
    var file = "./data.json";
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        jsonData = JSON.parse(rawFile.responseText);
        callback();
      }
    };
    rawFile.send(null);
  }

  function displayJson() {
    //console.log(typeof jsonData)
    var jsonBox = document.getElementById("jsonBox");
    jsonData.forEach(function (element) {
      jsonBox.innerHTML += `<div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Id: ${element.id}</h5>
        <h5 class="card-title">Name: ${element.name}</h5>
        <h5 class="card-title">Age: ${element.age}</h5>
        <h5 class="card-title">Gender: ${element.gender}</h5>
        <h5 class="card-title">Email: ${element.email}</h5>
        <h5 class="card-title">PhoneNo: ${element.phoneNo}</h5>
      </div>
    </div>`;
    });
  }
}

function logout() {
  sessionStorage.removeItem("emailId");
  window.location = "./index.html";
}

onload = mod;
