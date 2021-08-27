var firebaseConfig = {
    apiKey: "AIzaSyDvCaJNi1IRM7lmMFyxBJEp8cNlR4QogRQ",
    authDomain: "enquiry-form-10e91.firebaseapp.com",
    projectId: "enquiry-form-10e91",
    storageBucket: "enquiry-form-10e91.appspot.com",
    messagingSenderId: "182642563900",
    appId: "1:182642563900:web:5ec1d66f459f5ea2091c39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var UserInputsRef = firebase.database().ref("UserInputs");
document.getElementById("enquireform").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var fname = getInputVal("name");
  var lname = getInputVal("fathername");
  var mobile = getInputVal("contact");
  var email = getInputVal("email");

}


function saveMessages(
  fname,
  lname,
  mobile,
  email,
  
) {
  var newuserInputsRef = UserInputsRef.push();
  newuserInputsRef.set({
    name: fname,
    father:lname, 
    mobile: mobile,
    email: email,
  });
 
}