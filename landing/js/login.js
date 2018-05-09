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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user-div").style.display = "block";
    document.getElementById("login-div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML =
        "Welcome Uer : " + email_id;
    }
  } else {
    // No user is signed in.

    document.getElementById("user-div").style.display = "none";
    document.getElementById("login-div").style.display = "block";
  }
});

function login() {
  var userEMail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEMail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("error : " + errorMessage);
      // ...
    });
}

function logout() {
  firebase.auth().signOut();
}
