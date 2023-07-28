//var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
//var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var animalSearch = document.querySelector("#startbtn");
function getApi() {
    //var name = 
  var reqURL =  'https://api.api-ninjas.com/v1/animals?name=' + "cheetah"; 
  fetch (reqURL, {
    headers: {"X-Api-Key": "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm"}
  })
  .then(function (response){
return response.json();
})
.then(function (data){
    console.log(data)
})

};

getApi();
//animalSearch.addEventListener("click", function());

//renderGifs()