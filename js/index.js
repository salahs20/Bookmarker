var siteNameInput = document.getElementById("SiteName");
var siteURLInput = document.getElementById("SiteURL");

var site = [];

if(localStorage.getItem('data') != null){
  site =JSON.parse(localStorage.getItem('data'));
  displayData(site);
}


function getSiteData() {
  var siteData = {
    Name: siteNameInput.value,
    URL: siteURLInput.value,
  };
  site.push(siteData);
  localStorage.setItem('data',JSON.stringify(site));
  displayData(site);
  clearForm()
}

function clearForm() {
  siteNameInput.value = "";
  siteURLInput.value = "";
}

function displayData(arr) {
  var cartona = ``;
  for (var i = 0; i < arr.length; i++) {
    cartona += ` <tr>
    <td>${i+1}</td>
    <td>${arr[i].Name}</td>
    <td><a href="${arr[i].URL}"><button class="btn btn-primary">Visit</button></a></td>
    <td><button class="btn btn-danger" onclick='deleteData(${i})'>delete</button></td>
</tr>`;
  }
  document.getElementById("tBody").innerHTML = cartona;
}
function deleteData(siteindex) {
  site.splice(siteindex, 1);
  localStorage.setItem('data',JSON.stringify(site));
  displayData(site);
}
