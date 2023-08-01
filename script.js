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
window.addEventListener('load', function(event){
  console.log('window wow')
  onLoad();
});

modalPrompt.addEventListener("click", function() {
  modalOneActivate.classList.add("is-active");
});

animalSearch.addEventListener("click", function() {

modalOneActivate.classList.remove("is-active");
// modalTwoActivate.classList.add("is-active");
getApi();



})
var gifGrid =  document.querySelectorAll(".gifGrid");
console.log(gifGrid)

function getApi() {
  var searchValue = initialUserInput.value;
  var animalURL =  `https://api.api-ninjas.com/v1/animals?name=${searchValue}`;
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
  var giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchValue}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
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
      div.innerHTML = ''
      index += 1
    })
    index = 0
  gifGrid.forEach(function(div){
    console.log(gifs.data[index].images.original.url)
    var img = document.createElement("img");
    img.src = gifs.data[index].images.original.url;
    div.append(img);
    index += 1;
    // console.log(displayGIF)

  });

      
        
     
    }

    })   
}

/* 
Nick's area below -- proceed w/ caution! 
*/

function onLoad(url){
  gifGrid.forEach(function(div){
    console.log('sadfasdf')
    console.log(url);
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
console.log(randomAnimal)

async function getLoaded() {
  var searchValue = findRandomAnimal();
  var giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchValue}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  
  const response = await fetch(giphyURL);
  const gifs = await response.json();
  var random = gifs.data[0].images.original.url;
  console.log(random)
  return random;
}
async function placeHolderRandom() {
  const randomAnimalGif = await getLoaded();
  console.log(randomAnimalGif);
  console.log(typeof randomAnimalGif);
  onLoad(randomAnimalGif);
  return randomAnimalGif;
}

// }




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

 var randomAnimalGif = getLoaded().then(function (randomAnimalGif){randomAnimalGif});
      





        