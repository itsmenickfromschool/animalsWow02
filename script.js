var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var giphyAPI = `iNJblv33ezpXseWc2SeIxWyVYNY9QCc5`
//added modalPrompt and modalActivation for eventlistener
var modalPrompt = document.querySelector("#search-prompt");
var modalActivation = document.querySelector(".modal");
var animalSearch = document.querySelector("#startbtn");
var initialUserInput = document.getElementById("initialUserInput")
var name = " ";
var animalFactBox =  document.getElementById("animalFacts")
var contentHtml = ''

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
        <li>Predators: ${data[0].characteristics.predators} </li>
        `
      }
    animalFactBox.innerHTML = contentHtml
    })
    
}
function getGiphy() {
  var searchValue = initialUserInput.value;
  var giphyURL = ` https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchValue}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
// var name = document.getElementById('initialSearch')
fetch (giphyURL, {
   
  })
    .then(function (response){
        return response.json();
})

    .then(function (data){
     
      console.log(data)
      var displayGIF =  document.getElementById("gifBox");
      displayGIF.innerHTML = "";
      data.data.forEach((data) => {
       var img =document.createElement("img");
       img.src =data.images.original.url;
       displayGIF.appendChild(img);
      })


    })
}

/* this will activate the modal pop-up, I took the startBtn attached to the animalSearch and connected it to the Search
button inside of this modal, we can put something inside the event listener for animalSearch that will remove the (is-active)
class (to hide the modal, and we can remove all the html somehow and append the data to the page), OR we can have the removal
of (is-active) and have the animalSearch() data display in it's own modal */
//todo uncomment the event listener below and the html to see it in action and lmk what you think?
// modalPrompt.addEventListener("click", function() {
// modalActivation.classList.add("is-active");
// });

animalSearch.addEventListener("click", function() {
/* this is removing the modal on the search click, here we could do a modalTwo.classList.add("is-active") and create elements
and add classes for styling to display the search data with another modal */
//todo uncomment this as well!
//modalActivation.classList.remove("is-active");
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