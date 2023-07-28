var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var giphyAPI = `iNJblv33ezpXseWc2SeIxWyVYNY9QCc5`
var animalSearch = document.querySelector("#startbtn");
var animalName = 'giraffe'
var giphyURL =`https://api.giphy.com/v1/gifs/trending?q:${animalName}?api_key:${giphyAPI}`
var animalURL =  `https://api.api-ninjas.com/v1/animals?name= ${animalName}`; 
function getApi() {
// var name = document.getElementById('initialSearch')
fetch (animalURL, {
    headers: {"X-Api-Key": animalAPI}
  })
    .then(function (response){
        return response.json();
})
    .then(function (data){
        console.log(data)
})

fetch(giphyURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })

};

getApi();
//animalSearch.addEventListener("click", function());

//renderGifs()