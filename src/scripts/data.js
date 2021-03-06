

//          **** Dek ****
const data = {
    concertData (concertInfo) {
        fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL&city=Nashville&countryCode=US&keyword=${concertInfo}&sort=date,asc`)
        .then(concerts => concerts.json())
    .then(parsedConcerts => {
        let concertInfo = parsedConcerts._embedded.events
        concertInfo.forEach(event => {
            
            let eventName =event.name;
            let eventDate = event.dates.start.localDate;
            let concertMailBox = concertBuilder(eventName,eventDate);
            concertBuilder(eventName, eventDate);
            console.log(concertMailBox);
            concertAppender(concertMailBox);
        });
        clickSave()
    });
    }
}

const Locations = {
    concertLocation (concertAddress) {
        fetch ("https://app.ticketmaster.com/discovery/v2/events?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL&city=Nashville")
        .then(location => location.json())
        .then(parsedLocation => {

            let locationInfo = parsedLocation._embedded.events

        locationInfo.forEach(event => {
            let locationName = event._embedded.venues[0].name;
            let locationAddress = event._embedded.venues[0].address.line1;
            let locationMailBox = concertLocationBuilder(locationName,locationAddress);
         
            console.log(locationMailBox)
        })
        })
    }
}
Locations.concertLocation()



//          **** Dolly ****


//          **** Hannah ****

//Ricki's Solution:

const parksData = {
    parksFetch() {       //Attach userInputParks to Event Handler
        return fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
            .then(parks => parks.json())
            .then(parsedParks => {
                // return console.log(parsedParks);
                return parsedParks;
        })
    }
}
const parkDiv = document.querySelector("#results-container")

parksData.parksFetch().then(parks => {
    parks.forEach(park => {
        parkDiv.innerHTML+=`<h2>${park.park_name}</h2>`
        parkDiv.innerHTML+=`<p>${park.mapped_location_address}</p>`
        parkDiv.innerHTML+=`<button>Save Parks</button>`
    })
});
    //RICKI'S SUGGESTION: Try adding another .then to play with parksData (remove console.log first)
    //forEach can be used with Arrays, not Objects