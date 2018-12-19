// console.log("test eventListener.js")   //HN: Testing that eventListener is linked to HTML.

//          **** Dek ***


document.querySelector("#concerts-btn").addEventListener("click", function(event) {
    let concertSearch1 = document.getElementById("concerts-search");
    console.log(concertSearch1.value);
    data.concertData(concertSearch1.value)
   let breakContainer = document.getElementById("results-section");
    breakContainer.innerHTML = "";

});


// This runs itineraryBuilder inside domBuilder and adds the HTML and a button class depending on what API was called.
let getSavedResult = (event) => {
    // let save = document.getElementsByClassName("save-button");

    if (event.target.classList[0] === "save-button") {
    // let savedHTML = event.target.parentElement.firstElementChild.innerHTML;

    console.log("whats up")

    }else {
        console.log("not working")
    }
}


//     let itineraryDiv = document.getElementById("#itinerary-section");
//     itineraryDiv.innerHTML += savedHTML;
//     let buttonClass = event.target.classList[0];
//     domBuilder.itineraryBuilder(savedHTML, buttonClass);
//  }

//  // WHEN "save" button is clicked:
 let clickSave = () => {
    // Taking all elements with class="saveButton"
    let saveButton = document.querySelectorAll(".save-button");
    //    This loops through all "saveButton" elements and adds an event listener to the save buttons.
    for(let i = 0; i < saveButton.length; i++) {
    //    Then runs "getSavedResult" defined at line 37
       saveButton[i].addEventListener("click", getSavedResult);
    }
 }

// getSavedResult(event)

//          **** Dolly ****
//
//          **** Hannah ****

// Need an eventListener to wait for search button click
    // When button is clicked, replace text in "Results" section with text typed into search bar.
    // Make sure old text/results clear out after Save button is clicked for any one result item.

// BUTTON:
let parksSearchEvent = document.querySelector("parks-btn").addEventListener("click", function() {
    let parksUserInput = document.querySelector("parks-search").value;
});
//This references the button in domBuilder but if Grady's code is used (the drop-down), this will reference the drop-down not a button
 //HN: Test. Button works.

// EVENT LISTENER FORMAT FROM GRUNT-RESOURCE-TRACKER:
// const eventListeners = {
//     handleSearchButton() {
//       let searchInput = document.querySelector("input[name='searchinput']");
//       let searchQuery = searchInput.value;

//       data.queryResources(searchQuery)
//       .then(searchResultsArray => {
//         console.log(searchResultsArray);
//       })

//     }
//   };

// DOLLY'S EXAMPLE OF EVENT LISTENER:
//IN EVENT LISTENER SECTION:
// const eventListeners = {
//     handleSearchButton() {
//       let searchInput = document.querySelector("#searchBox");
//       let searchQuery = searchInput.value;

//       data.queryResources(searchQuery)
//       .then(searchResultsArray => {
//         console.log(searchResultsArray);
//         let resultFragments = domComponents.createResultFragment(searchResultsArray);
//         console.log(resultFragments);
//         domBuilder.appendResultContainer(resultFragments);
//       });
//     }
//   };

// IN DOMBUILDER SECTION:
// let searchButton = document.querySelector("#search-button");
//   searchButton.addEventListener("click",eventListeners.handleSearchButton);


// MY EVENT LISTENER USING GRUNT-RESOURCE-TRACKER AS A REFERENCE:

// const parksSearchEventListener = {
//     parksSearchHandler() {
//         let parksSearchInput = document.querySelector("parks-search");
//         let searchQuery = parksSearchInput.value;
//     }
// }