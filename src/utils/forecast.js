const request = require("request");

const forecast = (longitude, latitude, callback) => {
  // URL API
  const url = `https://api.darksky.net/forecast/36c68e867439bbf93474df268266b674/${longitude},${latitude}?units=si`;

  // Request Method
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the Weather Service", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      // console.log(body);

      const data = body.currently;
      const temperature = data.temperature;
      const precipProbability = data.precipProbability;

      const dailyData = body.daily.data[0];
      const todayForecast = body.daily.data[0].summary;

      callback(
        undefined,
        `${todayForecast} It is currently ${temperature} degrees out. This high today is ${dailyData.temperatureHigh} with a low of ${dailyData.temperatureLow}. There is a ${precipProbability} % chance of rain. <img src='https://darksky.net/images/weather-icons/${dailyData.icon}.png' value='${dailyData.icon}' class='climate-icon' />`
      );
    }
  });
};

module.exports = forecast;
