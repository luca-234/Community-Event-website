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
// // favorite-btn click event
// document
// .getAnimations("fav-eve")
// .addEventListener("click", function () {
//   // Toggle the favorite state
//   const favButton = document.getElementById("fav-eve");
//   if(favButton.style.color === "red") {
//     favButton.style.color = "black"; // Unfavorite
//   } else {
//     favButton.style.color = "red"; // Favorite
//   }
// });

