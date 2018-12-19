console.log("test data.js");   //HN: Testing that data.js is linked to HTML.

//          **** Dek ****


//          **** Dolly ****


//          **** Hannah ****

//Ricki's Solution:

// const parksData = {
//     parksFetch() {       //Attach userInputParks to Event Handler
//         return fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
//             .then(parks => parks.json())
//             .then(parsedParks => {
//                 // return console.log(parsedParks);
//                 return parsedParks;
//         })
//     }
// }
// const parkDiv = document.querySelector("#results-container")

// parksData.parksFetch().then(parks => {
//     parks.forEach(park => {
//         parkDiv.innerHTML+=`<h2>${park.park_name}</h2>`
//         parkDiv.innerHTML+=`<p>${park.mapped_location_address}</p>`
//         parkDiv.innerHTML+=`<button>Save Parks</button>`
//     })
// });






//Try adding another .then to play with parksData (remove console.log first)



//forEach can be used with Arrays, not Objects