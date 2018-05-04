// Initialize Firebase
var config = {
  apiKey: "AIzaSyAw0LENyivnQuCMS1TTuwi5FH9Izdvcyk8",
  authDomain: "ishtechco-landing.firebaseapp.com",
  databaseURL: "https://ishtechco-landing.firebaseio.com",
  projectId: "ishtechco-landing",
  storageBucket: "",
  messagingSenderId: "277722953042"
};
firebase.initializeApp(config);

// reference ish-subscriber collection
var messagesRef = firebase.database().ref("ish-subscribers");

// listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// submit contact form
function submitForm(e) {
  e.preventDefault();

  // get values
  var choice = getInputVal("choice");
  var email = getInputVal("email");
  // save message
  saveMessage(choice, email);
  // show alert
  document.querySelector(".alert").style.display = "block";
  // hide alert after 2 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  // clear form
  document.getElementById("contactForm").reset();
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save ish-subscriberto firebase
function saveMessage(choice, email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    choice: choice,
    email: email
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("subscribe");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Modal form controls
$(document).ready(function() {
  //if you wish to keep both the divs hidden by default then dont forget to hide //them
  $("#help-content").hide();
  $("#about-content").show();

  $("#about-anchor").click(function() {
    $("#help-content").hide();
    $("#about-content").show();
  });

  $("#help-anchor").click(function() {
    $("#help-content").show();
    $("#about-content").hide();
  });

  $("#cta-button").click(function() {
    $("#help-content").show();
    $("#about-content").hide();
  });
});
