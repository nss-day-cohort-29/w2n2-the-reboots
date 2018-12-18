// console.log("test eventListener.js")   //HN: Testing that eventListener is linked to HTML.

//          **** Dek ***


document.querySelector("#concerts-btn").addEventListener("click", function(event) {
    let concertSearch1 = document.getElementById("concerts-search");
    console.log(concertSearch1.value);
    data.concertData(concertSearch1.value)

});


// // This runs itineraryBuilder inside domBuilder and adds the HTML and a button class depending on what API was called.
// let getSavedResult = (event) => {
//     let savedHTML = event.target.parentElement.firstElementChild.innerHTML;

//     console.log(savedHTML);

//     let itineraryDiv = document.getElementById("#itinerary-section");
//     itineraryDiv.innerHTML += savedHTML;
//     // let buttonClass = event.target.classList[1];
//     // domBuilder.itineraryBuilder(savedHTML, buttonClass);
//  }

//  // WHEN "save" button is clicked:
//  let clickSave = () => {
//     // Taking all elements with class="saveButton"
//     let saveButton = document.querySelectorAll("#save-button");
//     //    This loops through all "saveButton" elements and adds an event listener to the save buttons.
//     for(let i = 0; i < saveButton.length; i++) {
//     //    Then runs "getSavedResult" defined at line 37
//        saveButton[i].addEventListener("click", getSavedResult);
//     }

//  }












//Note from Hannah: I created variables for buttons & input fields for the search section but did not finish event listener (see my code below). Let me know if you want to use the variables I made.
//          **** Dolly ****
//
    //Note from Hannah: I created variables for buttons & input fields for the search section but did not finish event listener (see my code below). Let me know if you want to use the variables I made.
//          **** Hannah ****
//

    //NOTE: HN created variables but eventListener function is not created yet:

    // let parksBtn = document.getElementById("parks-btn");
    // let parkSearch = document.getElementById("parks-search");

    // let eventsBtn = document.getElementById("events-btn");
    // let eventsSearch = document.getElementById("events-search");

    // let meetupBtn = document.getElementById("meetup-btn");
    // let meetupSearch = document.getElementById("meetup-search");

    // let concertsBtn = document.getElementById("concerts-btn");
    // let concertsSearch = document.getElementById("concerts-search");