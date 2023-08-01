var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var giphyAPI = `iNJblv33ezpXseWc2SeIxWyVYNY9QCc5`
//added modalPrompt and modalActivation for eventlisteners
var modalPrompt = document.querySelector("#search-prompt");
var modalOneActivate = document.querySelector("#modal-one");
var modalTwoActivate = document.querySelector("#modal-two");
var animalSearch = document.querySelector("#startbtn");
var initialUserInput = document.getElementById("initialUserInput")
var name = " ";
var animalFactBox =  document.getElementById("animalFacts")
var contentHtml = ''
var animalDataFound = false; 

var gifGrid =  document.querySelectorAll(".gifGrid");
console.log(gifGrid)

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
      if (data.length === 0){
 
        contentHtml = `<p>"Please be more specific with your animal name, Maybe try it's common name. If all else fails try another Animal! Sorry!!</p>`
        
      } else {
        
        contentHtml = `
        <li>Habitat: ${data[0].characteristics.habitat} </li>
        <li>Diet: ${data[0].characteristics.diet}</li>
        <li>Locations: ${data[0].locations[0]} </li>
        <li>Lifespan: ${data[0].characteristics.lifespan} </li>
       
        `
        animalDataFound = true;
      }
    animalFactBox.innerHTML = contentHtml
    getGiphy();
    })
    
}
function getGiphy() {
  var searchValue = initialUserInput.value;
  var giphyURL = ` https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchValue}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
// var name = document.getElementById('initialSearch')
fetch (giphyURL, {
   
  })
    .then(function (response){
        return response.json();
})

    .then(function (gifs){
      if (!animalDataFound){
        return;
      } else {     
        var index = 0
      gifGrid.forEach(function(div){
        console.log(gifs.data[index].images.original.url)
        var img = document.createElement("img");
        img.src = gifs.data[index].images.original.url;
        div.append(img);
        index += 1
        // console.log(displayGIF)

      });
        
      //   )
      //   displayGIF.innerHTML = "";
      //   data.data.forEach((data) => {
      //   var img =document.createElement("img");
      //   img.src =data.images.original.url;
      //   displayGIF.appendChild(img);
      //   console.log(displayGIF)
      // })
    }

    })
}

modalPrompt.addEventListener("click", function() {
modalOneActivate.classList.add("is-active");
});

animalSearch.addEventListener("click", function() {

modalOneActivate.classList.remove("is-active");
// modalTwoActivate.classList.add("is-active");
  getApi();

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

// var habitat = document.createElement("li");
        // var diet = document.createElement("li");
        // var locations = document.createElement("li");
        // var predators = document.createElement("li");
        // habitat.setAttribute("class", "subtitle is-dark");
        // diet.setAttribute("class", "subtitle is-dark");
        // locations.setAttribute("class", "subtitle is-dark");
        // predators.setAttribute("class", "subtitle is-dark");
        // habitat.textContent = "Habitat: " + data[0].characteristics.habitat;
        // diet.textContent = "Diet: " + data[0].characteristics.diet;
        // locations.textContent = "Locations: " + data[0].locations[0];
        // predators.textContent = "Predators: " + data[0].characteristics.predators;
        // animalFactBox.append(habitat);
        // animalFactBox.append(diet);
        // animalFactBox.append(locations);
        // animalFactBox.append(predators);


        