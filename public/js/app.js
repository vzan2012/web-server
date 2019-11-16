console.log("Client Side - JavaScript File is loaded !!!");

// Example
// fetch('http://puzzle.mead.io/puzzle').then(response => {
//     response.json().then(data => console.log(data));
// }).catch(e => {
//     console.log(e);
// });

const weatherForm = document.querySelector("form");

const txtLocation = document.querySelector("#txtLocation");

const msgSuccess = document.querySelector(".msg-success");
const msgError = document.querySelector(".msg-error");

const hideMsgSections = () => {
  msgSuccess.style.display = "none";
  msgError.style.display = "none";
};

hideMsgSections();

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  // Goal: Fetch Weather
  fetch(`/weather?address=${txtLocation.value}`)
    .then(async resp => {
      const data = await resp.json();
      // console.log(data);
      if (data.error) {
        msgSuccess.style.display = "none";

        setTimeout(() => {
          msgError.style.display = "block";
          msgError.querySelector(".card-body").innerHTML = `${data.error}`;
        }, 500);

        setTimeout(() => {
          hideMsgSections();
        }, 3000);

        console.log(data.error);
      } else {
        msgError.style.display = "none";

        setTimeout(() => {
          msgSuccess.style.display = "block";
          msgSuccess.querySelector(".card-body").innerHTML =
            `<div class='location-title mb-3'>${data.location}</div>` +
            `<p>${data.forecast} </p>`;
        }, 500);

        // console.log(data.location);
        // console.log(data.forecast);
      }
    })
    .catch(err => console.log(err));
});
