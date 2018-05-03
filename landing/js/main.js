// Initialize Firebase
var config = {
  apiKey: "AIzaSyCyYe6-iGDVsYhCm2p0PnSIHubaBw7uHDQ",
  authDomain: "ish-contact.firebaseapp.com",
  databaseURL: "https://ish-contact.firebaseio.com",
  projectId: "ish-contact",
  storageBucket: "",
  messagingSenderId: "636022481161"
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
