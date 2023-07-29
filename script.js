var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var giphyAPI = `iNJblv33ezpXseWc2SeIxWyVYNY9QCc5`
var animalSearch = document.querySelector("#startbtn");
var initialUserInput = document.getElementById("initialUserInput")
var name = " ";
var animalFactBox =  document.getElementById("animalFacts")

function getApi() {
  var searchValue = initialUserInput.value;
  var animalURL =  `https://api.api-ninjas.com/v1/animals?name=${searchValue}`;
  var giphyURL = `https://api.giphy.com/v1/gifs/trending?api_key:${giphyAPI}?q:${searchValue}`;
  
// var name = document.getElementById('initialSearch')
fetch (animalURL, {
    headers: {"X-Api-Key": animalAPI}

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
}
function getGiphy() {
  var searchValue = initialUserInput.value;
    var giphyURL = ` https://api.giphy.com/v1/gifs/search?api_key=iNJblv33ezpXseWc2SeIxWyVYNY9QCc5&q=${searchValue}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
// var name = document.getElementById('initialSearch')
fetch (giphyURL, {
   
  })
    .then(function (response){
        return response.json();
})

    .then(function (data){
     
      console.log(data)

    })
}


animalSearch.addEventListener("click", function() {
  getApi();
  getGiphy();
})

/* fetch(giphyURL)
    .then(function(response){
            return response.json();
        })
        .then(function(data){
                console.log(data);
            })
        
        };
*/
//getApi();
        
//animalSearch.addEventListener("click", function());


//renderGifs()