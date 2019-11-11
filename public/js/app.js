console.log("Client Side - JavaScript File is loaded !!!");

// Example
// fetch('http://puzzle.mead.io/puzzle').then(response => {
//     response.json().then(data => console.log(data));
// }).catch(e => {
//     console.log(e);
// });

// Goal: Fetch Weather
fetch("http://localhost:3000/weather?address=boston")
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
