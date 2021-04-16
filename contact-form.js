// <!-- TODO: Add SDKs for Firebase products that you want to use
//firebase.google.com/docs/web/setup#available-libraries -->

// Your web app's Firebase configuration
https: var firebaseConfig = {
  apiKey: "AIzaSyCNKP0o6ru8U1YyY-MpLziadHoICl-jHRE",
  authDomain: "iet-website-ee775.firebaseapp.com",
  projectId: "iet-website-ee775",
  storageBucket: "iet-website-ee775.appspot.com",
  messagingSenderId: "751344303367",
  appId: "1:751344303367:web:12e5bc18613118f6f159a2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-us").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  let name = document.querySelector(".contact-us__name").value;
  let eMail = document.querySelector(".contact-us__e-mail").value;
  let message = document.querySelector(".contact-us__message").value;

  console.log(name, eMail, message);
  saveContactInfo(name, eMail, message);

  document.querySelector(".contact-us").reset();
  document.querySelector(".alert").style.display = "block";
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
