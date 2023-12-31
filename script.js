var animalAPI = "FsdXAP6AmCh3sGYdfhvA6Q==WYbgbcTXlNXxZkxm";
var tenorAPI = "AIzaSyDEa3l0bqCEAeClPPwFIpniGKyPjJg2VRw";
var giphyAPI = `iNJblv33ezpXseWc2SeIxWyVYNY9QCc5`
//added modalPrompt and modalActivation for eventlisteners

//local storage 
var storedUserInput = JSON.parse(localStorage.getItem("userinput")) || [];

var modalPrompt = document.querySelector("#search-prompt");
var modalOneActivate = document.querySelector("#modal-one");
var animalSearch = document.querySelector("#startbtn");
var initialUserInput = document.getElementById("initialUserInput")
var name = " ";
var animalFactBox = document.querySelector(".animalFacts") //changed animal facts to a class to make styling easier
var contentHtml = ''
var animalDataFound = false;
const animals = [
  "Aardvark",
  "Albatross",
  "Antelope",
  "Armadillo",
  "Baboon",
  "Badger",
  "Barracuda",
  "Beagle",
  "Bison",
  "Blackbird",
  "Boar",
  "Bonobo",
  "Buffalo",
  "Chameleon",
  "Chinchilla",
  "Cockatoo",
  "Cormorant",
  "Coyote",
  "Dalmatian",
  "Dingo",
  "Dove",
  "Dugong",
  "Echidna",
  "Falcon",
  "Flamingo",
  "Fossa",
  "Gazelle",
  "Gibbon",
  "Giraffe",
  "Gorilla",
  "Hamster",
  "Hedgehog",
  "Heron",
  "Hyena",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Kangaroo",
  "Koala",
  "Komodo",
  "Lemur",
  "Leopard",
  "Liger",
  "Llama",
  "Lynx",
  "Macaw",
  "Manatee",
  "Mandrill",
  "Meerkat",
  "Narwhal",
  "Ocelot",
  "Okapi",
  "Orangutan",
  "Ostrich",
  "Otter",
  "Panda",
  "Panther",
  "Peacock",
  "Penguin",
  "Puma",
  "Quokka",
  "Raccoon",
  "Rat",
  "Red Panda",
  "Reindeer",
  "Salamander",
  "Scorpion",
  "Seahorse",
  "Sloth",
  "Squirrel",
  "Tapir",
  "Tarsier",
  "Toucan",
  "Vicuña",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wombat",
  "Xenops",
  "Yak",
  "Zebra",
];
/* **********************************************************************************************************************************/
window.addEventListener('load', function (event) {
  onLoad();
  // make butoon
});

modalPrompt.addEventListener("click", function () {
  modalOneActivate.classList.add("is-active");
    
  storedUserInput.push(initialUserInput.value);
  localStorage.setItem("userinput", JSON.stringify(storedUserInput));
    for (let i = 0; i < storedUserInput.length; i++) {
        var pTag = document.createElement("a")
        pTag.setAttribute("class", "navbar-item");
        pTag.textContent = storedUserInput[i];
        document.querySelector(".navbar-dropdown").appendChild(pTag);
        console.log(localStorage);
        };
});

animalSearch.addEventListener("click", function () {
  modalOneActivate.classList.remove("is-active");
  getApi();

  });


var gifGrid = document.querySelectorAll(".gifGrid");

function getApi() {
  var searchValue = initialUserInput.value;
  var animalURL = `https://api.api-ninjas.com/v1/animals?name=${searchValue}`;
  // var name = document.getElementById('initialSearch')
  fetch(animalURL, {
    headers: { "X-Api-Key": animalAPI }

  })
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {

      console.log(data)
      if (data.length === 0) {
        var errorMsg = document.createElement("div");
        errorMsg.setAttribute("class", "title");
        animalFactBox.append(errorMsg);
      } else {
        console.log("CHEETAHS STOLE MY LUNCH")
        animalFactBox.innerHTML = '<button class="button is-primary is-focused is-large is-responsive" id="search-prompt"> CLICK ME </button>'

       

        animalDataFound = true;

        // document.querySelector(".button").textContent = "SEARCH AGAIN" 

        modalPrompt = document.querySelector("#search-prompt");
        modalPrompt.addEventListener("click", function () {
          modalOneActivate.classList.add("is-active");
        });

       

        var animalName = document.createElement("div");
        var habitat = document.createElement("li");
        var diet = document.createElement("li");
        var locations = document.createElement("li");
        var predators = document.createElement("li");
        animalName.setAttribute("class", "title is-dark is-centered resetSearch");
        habitat.setAttribute("class", "subtitle is-dark resetSearch");
        diet.setAttribute("class", "subtitle is-dark resetSearch");
        locations.setAttribute("class", "subtitle is-dark resetSearch");
        predators.setAttribute("class", "subtitle is-dark resetSearch");
        animalName.textContent = initialUserInput.value;
        habitat.textContent = "Habitat: " + data[0].characteristics.habitat;
        diet.textContent = "Diet: " + data[0].characteristics.diet;
        locations.textContent = "Locations: " + data[0].locations[0];
        predators.textContent = "Predators: " + data[0].characteristics.predators;
        // reset.setAttribute('style', 'display: flex')
        animalFactBox.append(animalName);
        animalFactBox.append(habitat);
        animalFactBox.append(diet);
        animalFactBox.append(locations);
        animalFactBox.append(predators);
        /*
        we want to instead of append and remove all of these, add empty divs into the animalfacts div and target those. 


        if this is difficult i could also add the button to the event listeners with a button creat funtion and innerhtml = '' at the beginning and then create the button.
         */
      }
      getGiphy();
    })

}
function getGiphy() {
  var searchValue = initialUserInput.value;
  var giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchValue}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips&tag=animal`


  fetch(giphyURL, {

  })
    .then(function (response) {
      return response.json();
    })

    .then(function (gifs) {
      if (!animalDataFound) {
        return;
      } else {
        var index = 0
        gifGrid.forEach(function (div) {

          div.innerHTML = ''
          index += 1
        })
        index = 0
        gifGrid.forEach(function (div) {
          var img = document.createElement("img");
          img.src = gifs.data[index].images.original.url;
          div.append(img);
          index += 1;
        });




      }

    })
}

/* 
Nick's area below -- proceed w/ caution! 
*/

function onLoad() {
  gifGrid.forEach(async function (div) {
    var url = await placeHolderRandom()
    var img = document.createElement('img');
    img.src = url
    div.append(img);


  })
}

function findRandomAnimal() {
  const randomindex = Math.floor(Math.random() * animals.length);
  const randomAnimal = animals[randomindex];
  return randomAnimal;
}
var randomAnimal = findRandomAnimal()

async function getLoaded() {
  var searchValue = findRandomAnimal();
  var giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchValue}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

  const response = await fetch(giphyURL);
  const gifs = await response.json();
  var random = gifs.data[0].images.original.url;
  return random;
}
async function placeHolderRandom() {
  const randomAnimalGif = await getLoaded();
  // onLoad(randomAnimalGif);
  return randomAnimalGif;
}

// localStorage.clear(localStorage);

// animalSearch.addEventListener("click", function() {
//   storedUserInput.push(initialUserInput.value);
// localStorage.setItem("userinput", JSON.stringify(storedUserInput));
//   for (let i = 0; i < storedUserInput.length; i++) {
//       var pTag = document.createElement("a")
//       pTag.setAttribute("class", "navbar-item");
//       pTag.textContent = storedUserInput[i];
//       document.querySelector(".navbar-dropdown").appendChild(pTag);
//       console.log(localStorage);
//       };
// });





// fetch (giphyURL, {

//   })
//   .then(function (response){
//         return response.json();
// })

//   .then(function search(gifs){
//     // console.log(gifs.data[0].images.original.url)
//     var random = gifs.data[0].images.original.url
//     console.log(random)
//     console.log(typeof random)
//     return random;
//     // console.log(displayGIF)

//   });


// }

var randomAnimalGif = getLoaded().then(function (randomAnimalGif) { randomAnimalGif });






