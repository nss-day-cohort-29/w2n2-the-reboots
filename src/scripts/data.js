//          **** Dek ****
const data = {
    concertData (concertInfo) {
        fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=55BlEfJmY55sowbvAYAaU7P5KzxOGaOL&city=Nashville&countryCode=US&keyword=country&sort=date,asc")
        .then(concerts => concerts.json())
    .then(parsedConcerts => {
        let concertInfo = parsedConcerts._embedded.events
        concertInfo.forEach(event => {
            let eventName =event.name;
            let eventDate = event.dates.start.localDate;
            console.log(eventDate)
            
        });
        
    });
    }
}

   data.concertData() 





//          **** Dolly ****


//          **** Hannah ****