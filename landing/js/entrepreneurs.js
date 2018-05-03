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

// reference entrepreneurs collection
var entrepreneursRef = firebase.database().ref("entrepreneurs");

// listen for form submit
document.getElementById("form-landing").addEventListener("submit", submitForm);

// submit contact form
function submitForm(e) {
  e.preventDefault();

  // get values
  var firstname = getInputVal("first_name");
  var lastname = getInputVal("last_name");
  var email = getInputVal("email-form");
  var message = getInputVal("textarea1");
  // save Entrepreneur
  saveEntrepreneur(firstname, lastname, email, message);
  // show alert
  document.querySelector(".alert").style.display = "block";
  // hide alert after 2 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  // clear form
  document.getElementById("form-landing").reset();
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save Entrepreneur firebase
function saveEntrepreneur(firstname, lastname, email, message) {
  var newEntrepreneurRef = entrepreneursRef.push();
  newEntrepreneurRef.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    message: message
  });
}
