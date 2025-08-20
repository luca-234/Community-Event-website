let eventData = JSON.parse(localStorage.getItem("eventData"));

// Embed a Google Map based on the event location
document.getElementById(
  "mapEmbed"
).innerHTML = `<iframe width="100%" height="300" src="https://maps.google.com/maps?q=${encodeURIComponent(
  eventData.preciseLocstion
)}&output=embed"></iframe>`;

// Populate event details in the respective HTML elements
document.getElementById("eventTitle").textContent = eventData.eventTitle;
document.getElementById("organizer").textContent = eventData.organizer;
document.getElementById("startDate").textContent = eventData.startDate;
document.getElementById("location").textContent = eventData.location;
document.getElementById("description").textContent = eventData.description;
document.getElementById("Price").textContent = eventData.price;
document.getElementById("startTime").textContent = eventData.startTime;
document.getElementById("stopTime").textContent = eventData.stopTime;
document.getElementById(
  "image"
).innerHTML = `<img src = ${eventData.image} alt="Event Image" class="event-image" >`;
