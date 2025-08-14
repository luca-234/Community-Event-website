let eventData = JSON.parse(localStorage.getItem('eventData'))
console.log(eventData)

// Populate event details in the respective HTML elements
  document.getElementById("eventTitle").textContent = eventData.eventTitle;
  document.getElementById("startDate").textContent = eventData.startDate;
  document.getElementById("location").textContent = eventData.location;
  document.getElementById("description").textContent = eventData.description;
  document.getElementById("Price").textContent = eventData.price;
  document.getElementById("image").textContent = eventData.image;
