var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var animalSearch = document.querySelector("#startbtn");
function getApi() {
// var name = document.getElementById('initialSearch')
var name = 'giraffe'
var reqURL =  `https://api.api-ninjas.com/v1/animals?name= ${name}`; 
fetch (reqURL, {
    headers: {"X-Api-Key": animalAPI}
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
