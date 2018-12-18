console.log("test domBuilder.js")   //HN: Testing that domBuilder is linked to HTML.

//                      BEGIN SEARCH SECTION
//HN: The code below is the search section containing search input fields and search buttons
//Call the function 4 times with diff. parameters to loop
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


<div id="#results-section">
<h3>Results</h3>
<article>
<p id="parks-result"></p>
<button type="submit" id="save-parks-btn">Save Park Results</button>
</article>
</div>

<section id="itinerary-section">
<h3>Itinerary</h3>
</section>

</article>`

//                      END SEARCH SECTION

//                      BEGIN RESULTS SECTION


//          **** Dek ****

    //Note from Hannah: append your results here

//          **** Dolly ****

    //Note from Hannah: append your results here

//          **** Hannah ****


//                      END RESULTS SECTION

//                      BEGIN ITINERARY SECTION

//          **** Dek ****

    //Note from Hannah: append your results here

//          **** Dolly ****

    //Note from Hannah: append your results here

//          **** Hannah ****

//                      END ITINERARY SECTION