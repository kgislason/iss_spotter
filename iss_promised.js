const request = require('request-promise-native');

const fetchMyIP = () => {
  return request(`https://api64.ipify.org?format=json`);
};

const fetchCoordsByIP = (body) => {
  let ip = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  let { latitude, longitude } = JSON.parse(body);
  const requestURL = `https://iss-flyover.herokuapp.com/json/?lat=&${latitude}&lon=${longitude}`;
  return request(requestURL);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };