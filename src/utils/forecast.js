require("dotenv").config();

const request = require("request");

const OPENWEATHERMAP_APPID = process.env.OPENWEATHERMAP_APPID;

const forecast = (longitude, latitude, callback) => {
  // URL API
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${longitude}&lon=${latitude}&units=metric&lang=en&appid=${OPENWEATHERMAP_APPID}`;

  // Request Method
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the Weather Service", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      const { icon: weatherIcon, description: weatherDescription } =
        body.weather[0];
      const {
        main: {
          temp: temperature,
          temp_min: temperatureLow,
          temp_max: temperatureHigh,
          feels_like: temperatureLike,
        },
      } = body;
      callback(
        undefined,
        `It is currently ${temperature} &deg;C.<br/>This high today is ${temperatureHigh} &deg;C with a low of ${temperatureLow} &deg;C.<br/>Feels like ${temperatureLike} &deg;C. <img src='https://openweathermap.org/img/wn/${weatherIcon}.png' alt='${weatherDescription}' class='climate-icon' />`
      );
    }
  });
};

module.exports = forecast;
