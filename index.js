function selectSingleTrip() {
  let singleTrip = document.querySelector("#returnTrip");
  if (singleTrip.style.display === "block") {
    singleTrip.style.display = "none";
  } else {
    singleTrip.style.display = "none";
  }
}
function selectReturnTrip() {
  let roundTrip = document.querySelector("#returnTrip");
  if (roundTrip.style.display === "none") {
    roundTrip.style.display = "block";
  } else {
    roundTrip.style.display = "block";
  }
}
function contactUs() {
  let name = prompt("What is your name?");
  let email = prompt("what is your email address?");
  alert("Thank you " + name + ", our agent will be in touch with you! 😊");
}
let chatButton = document.querySelector(".letsChat");
chatButton.addEventListener("click", contactUs);

function manageBookings() {
  let lastName = prompt("What is your last name?");
  let refNumber = prompt("Please enter your booking reference number.");
  alert("Thank you " + lastName + " , please check your email. 👋");
}
let bookingsButton = document.querySelector(".bookings");
bookingsButton.addEventListener("click", manageBookings);
