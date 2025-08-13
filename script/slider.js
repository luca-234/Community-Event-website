// create-event-btn click event
document
  .getElementById("create-event-btn")
  .addEventListener("click", function () {
    // Toggle the visibility of the event form
    const eventForm = document.querySelector(".event-form");
    if (eventForm.style.display === "none" || eventForm.style.display === "") {
      eventForm.style.display = "block";
    } else {
      eventForm.style.display = "none";
    }
  });
