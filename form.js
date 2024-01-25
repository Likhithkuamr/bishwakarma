const scriptURL =
  "https://script.google.com/macros/s/AKfycbxDgCmnJiz3IcAdlwj0QU5ns6-95kiSMIootFH_jw6tT_gsrjcc6IwhMKrOjjPuLw0o/exec";
const form = document.forms["submit-to-google-sheet"];
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      success.innerHTML = "data successfully submit";

      setTimeout(function () {
        success.innerHTML = "";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
