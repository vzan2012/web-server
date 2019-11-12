console.log("Client Side - JavaScript File is loaded !!!");

// Example
// fetch('http://puzzle.mead.io/puzzle').then(response => {
//     response.json().then(data => console.log(data));
// }).catch(e => {
//     console.log(e);
// });

const weatherForm = document.querySelector("form");

const txtLocation = document.querySelector("#txtLocation");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  // Goal: Fetch Weather
  fetch(`http://localhost:3000/weather?address=${txtLocation.value}`)
    .then(async resp => {
      const data = await resp.json();
      // console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    })
    .catch(err => console.log(err));
});
