//var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
//var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var animalSearch = document.querySelector("#startbtn");
var initialUserInput = document.getElementById("initialUserInput")
var name = " ";
var animalFactBox =  document.getElementById("animalFacts")

function getApi() {
  var searchValue = initialUserInput.value;
  var reqURL =  'https://api.api-ninjas.com/v1/animals?name=' + searchValue; 
  fetch (reqURL, {
    headers: {"X-Api-Key": "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm"}
  })
  .then(function (response){
return response.json();
})
.then(function (data){

  console.log(data)
  var contentHtml = `
  <li>Habitat: ${data[0].characteristics.habitat} </li>
  <li>Diet: ${data[0].characteristics.diet}</li>
  <li>Locations: ${data[0].locations[0]} </li>
  <li>Predators: ${data[0].characteristics.predators} </li>
  `
animalFactBox.innerHTML = contentHtml

})

};


animalSearch.addEventListener("click", function() {
  getApi();
})

//renderGifs()