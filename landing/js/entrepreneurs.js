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
