// console.log("test domBuilder.js")   //HN: Testing that domBuilder is linked to HTML.

//                      BEGIN SEARCH SECTION
//HN: The code below is the search section containing search input fields and search buttons

let displayContainer = document.getElementById("display-container");
displayContainer.innerHTML = `<section id="#search-section">
<article>
<h3>Search</h3>
<input type="text" id="parks-search" placeholder="Search Parks Here">
<button type="submit" id="parks-btn">Search Parks</button>
</article>
<article>  
  <input type="text" id="events-search" placeholder="Search Events Here">
  <button type="submit" id="events-btn">Search Events</button>
</article>
<article>
  <input type="text" id="meetup-search" placeholder="Search Meetups Here">
  <button type="submit" id="meetups-btn">Search Meetups</button>
</article>
<article>
  <input type="text" id="concerts-search" placeholder="Search Concerts Here">
  <button type="submit" id="concerts-btn">Search Concerts</button>
</article>
</section>

<section id="results-section">
<h3>Results</h3>
</section>

<section id="itinerary-section">
<h3>Itinerary</h3>
</section>

</article>`

//                      END SEARCH SECTION

//                      BEGIN RESULTS SECTION

//         **** Dek ****
concertBuilder = function(eventName, eventDate){
return `<div>
    <h3>${eventName}</h3>
    <p>${eventDate}</p>
    <button class ="save-button">"save"</button>
</div>`
}
concertLocationBuilder = function(locationName, locationAddress) {
    return `<div>
    <h3>${locationName}</h3>
    <p>${locationAddress}</p>
    </div>
    `
}

//          **** Dolly ****



//          **** Hannah ****

//                      END RESULTS SECTION

//                      BEGIN ITINERARY SECTION

//          **** Dek ****
// let concert =function(name, date) {
    

//Note from Hannah: write your own function here that appends the results from your saved results to this section.

//          **** Dolly ****

    //Note from Hannah: write your own function here that appends the results from saved results to this section.

//          **** Hannah ****

  //Drop-down menu form begins here. Compliments of Grady Robbins:

  // <form>
  //       <h1>Welcome to Nashville</h1>
  //       <fieldset>
  //         <legend> Search for stuff to do today: </legend>
  //           <section>
  //             <select name="parksearch" id="parksearch" >
  //                 <option value="" selected disabled hidden>Parks by feature</option>
  //                 <option value="ada_accessible">ADA Accessible</option>
  //                 <option value="baseball_fields">Baseball Fields</option>
  //                 <option value="basketball_courts">Basketball Courts</option>
  //                 <option value="boat_launch">Boat Launch</option>
  //                 <option value="community_center">Community Center</option>
  //                 <option value="disc_golf">Disc Golf</option>
  //                 <option value="dog_park">Dog Park</option>
  //                 <option value="fishing_by_permit">Fishing</option>
  //                 <option value="football_multi_purpose_fields">Football Fields</option>
  //                 <option value="hiking_trails">Hiking Trails</option>
  //                 <option value="horse_trails">Horse Trails</option>
  //                 <option value="lake">Lake</option>
  //                 <option value="playground">Playground</option>
  //                 <option value="restrooms_available">Restrooms Available</option>
  //                 <option value="skate_park">Skate Park</option>
  //                 <option value="soccer_fields">Soccer Fields</option>
  //                 <option value="swimming_pool">Swimming Pool</option>
  //                 <option value="tennis_courts">Tennis Courts</option>
  //                 <option value="walk_jog_paths">Walking/Jogging Paths</options>
  //               </select>
  //             <button type="button" id="park_search_btn">Search Parks</button>
  //           </br>
  //             <input type="text" name="restaurants" id="dine_search_bar" placeholder="Search Restaurants by Food Type">
  //             <button type="button" id="dine_search_btn">Search Restaurants</button>
  //           </br>
  //             <input type="text" name="meetups" id="meet_search_bar" placeholder="Search Meetups by Topic">
  //             <button type="button" id="meet_search_btn">Search Meetups</button>
  //           </br>
  //             <input type="text" name="concerts" id="show_search_bar" placeholder="Search Concerts by Genre">
  //             <button type="button" id="show_search_btn">Search Live Shows</button>
  //         </section>
  //     </form>
  //                                Drop-down menu form ENDS here.

//                      END ITINERARY SECTION