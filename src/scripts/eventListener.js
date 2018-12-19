console.log("test eventListener.js")   //HN: Testing that eventListener is linked to HTML.

//          **** Dek ****
//
//          **** Dolly ****
//
//                                      **** Hannah ****
//
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

    
