import BandSiteApi from "./band-site-api.js";

const API_KEY = "c33cf7a7-78ec-4150-ac97-2f7c69867d88";

const bandSiteApi = new BandSiteApi(API_KEY);


// Preset function

const renderShows = (shows) => {

    shows.forEach((item) => {
        const showItems = document.createElement("div");
        showItems.classList.add("shows__show-item");
        showsContainer.appendChild(showItems);

        const showDateTitle = document.createElement("h4");
        showDateTitle.classList.add("shows__show-item--mobile-header");
        showDateTitle.textContent= "DATE";
        showItems.appendChild(showDateTitle);

        const showDate = document.createElement("p");
        showDate.classList.add("shows__show-item--date");
        const showDateTimestamp = new Date(item.date);
        showDate.textContent= showDateTimestamp.toDateString();
        showItems.appendChild(showDate);

        const showVenueTitle = document.createElement("h4");
        showVenueTitle.classList.add("shows__show-item--mobile-header");
        showVenueTitle.textContent= "VENUE";
        showItems.appendChild(showVenueTitle);

        const showVenue = document.createElement("p");
        showVenue.classList.add("shows__show-item--place");
        showVenue.textContent= item.place;
        showItems.appendChild(showVenue);

        const showLocationTitle = document.createElement("h4");
        showLocationTitle.classList.add("shows__show-item--mobile-header");
        showLocationTitle.textContent= "LOCATION";
        showItems.appendChild(showLocationTitle);

        const showLocation = document.createElement("p");
        showLocation.classList.add("shows__show-item--place");
        showLocation.textContent= item.location;
        showItems.appendChild(showLocation);

        const button = document.createElement("button")
        button.classList.add("shows__show-item--button");
        button.textContent = "BUY TICKETS";
        showItems.appendChild(button);

        const divider = document.createElement("div");
        divider.classList.add("divider--mobile");
        showsContainer.appendChild(divider);
    })
}

const addClickEvent = () => {
    const shows = document.querySelectorAll(".shows__show-item");
    
    shows.forEach((item) => {
        item.addEventListener("click", (event) => {
            shows.forEach((item) => {
                item.classList.remove("shows__selected");
            });
            
            item.classList.add("shows__selected");
        })
    })
};

const displayShows = async () => {
    try {
        const shows = await bandSiteApi.getShows();

        renderShows(shows);

        addClickEvent(); 
    } catch (error) {
        console.log(error);
    }
}

displayShows();

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

