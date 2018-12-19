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









//Note from Hannah:
//          **** Dolly ****
//
    //Note from Hannah:
//          **** Hannah ****