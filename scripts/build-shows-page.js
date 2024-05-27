



// Constructing show section

const showSection = document.querySelector(".shows");

const showsContainer = document.createElement("div");
showsContainer.classList.add("shows-container");
showSection.appendChild(showsContainer);

const tabletHeaderContainer = document.createElement("div");
tabletHeaderContainer.classList.add("shows__tablet");
showsContainer.appendChild(tabletHeaderContainer);

const tabletDateTitle = document.createElement("h4");
tabletDateTitle.classList.add("shows__tablet--header");
tabletDateTitle.textContent = "DATE";
tabletHeaderContainer.appendChild(tabletDateTitle);

const tabletVenueTitle = document.createElement("h4");
tabletVenueTitle.classList.add("shows__tablet--header");
tabletVenueTitle.textContent = "VENUE"
tabletHeaderContainer.appendChild(tabletVenueTitle);

const tabletLocationTitle = document.createElement("h4");
tabletLocationTitle.classList.add("shows__tablet--header--location");
tabletLocationTitle.textContent = "LOCATION";
tabletHeaderContainer.appendChild(tabletLocationTitle);

// showList.forEach((item) => displayShows(item));


// Add event listener for showitems' onclick

const showItems = document.querySelectorAll(".shows__show-item");

showItems.forEach((showItem) => {
    showItem.addEventListener("click", (event) => {
        showItems.forEach((showItem) => {
            showItem.classList.remove("shows__selected");
        });
        
        showItem.classList.add("shows__selected");
    })
});



/***********
 * To be deleted before submission
 * ************/ 
// const displayShows = (showItem) => {
//     const showItems = document.createElement("div");
//     showItems.classList.add("shows__show-item");
//     showsContainer.appendChild(showItems);

//     const showDateTitle = document.createElement("h4");
//     showDateTitle.classList.add("shows__show-item--mobile-header");
//     showDateTitle.textContent= "DATE";
//     showItems.appendChild(showDateTitle);

//     const showDate = document.createElement("p");
//     showDate.classList.add("shows__show-item--date");
//     showDate.textContent= showItem.date.toDateString();
//     showItems.appendChild(showDate);

//     const showVenueTitle = document.createElement("h4");
//     showVenueTitle.classList.add("shows__show-item--mobile-header");
//     showVenueTitle.textContent= "VENUE";
//     showItems.appendChild(showVenueTitle);

//     const showVenue = document.createElement("p");
//     showVenue.classList.add("shows__show-item--place");
//     showVenue.textContent= showItem.venue;
//     showItems.appendChild(showVenue);

//     const showLocationTitle = document.createElement("h4");
//     showLocationTitle.classList.add("shows__show-item--mobile-header");
//     showLocationTitle.textContent= "LOCATION";
//     showItems.appendChild(showLocationTitle);

//     const showLocation = document.createElement("p");
//     showLocation.classList.add("shows__show-item--place");
//     showLocation.textContent= showItem.location;
//     showItems.appendChild(showLocation);

//     const button = document.createElement("button")
//     button.classList.add("shows__show-item--button");
//     button.textContent = "BUY TICKETS";
//     showItems.appendChild(button);

//     const divider = document.createElement("div");
//     divider.classList.add("divider--mobile");
//     showsContainer.appendChild(divider);
// }

// // Arrays to be used

// const showList = [
//     {
//         date: new Date("Mon Sept 09 2024"), 
//         venue:"Ronald Lane", 
//         location:"San Francisco, CA"
//     }, 
//     {
//         date: new Date("Tue Sept 17 2024"), 
//         venue:"Ronald Lane", 
//         location:"San Francisco, CA"
//     },
//     {
//         date: new Date("Sat Oct 12 2024"), 
//         venue:"View Lounge", 
//         location:"San Francisco, CA"
//     },
//     {
//         date: new Date("Sat Nov 16 2024"), 
//         venue:"Hyatt Agency", 
//         location:"San Francisco, CA"
//     },
//     {
//         date: new Date("Fri Nov 29 2024"), 
//         venue:"Moscow Center", 
//         location:"San Francisco, CA"
//     },
//     {
//         date: new Date("Wed Dec 18 2024"), 
//         venue:"Press Club", 
//         location:"San Francisco, CA"
//     },
// ];
