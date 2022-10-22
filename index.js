const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
let myIP = '38.2.154.4';

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  myIP = ip;
  return ip;
});

let coordinates = fetchCoordsByIP(myIP, (error, data) => {
  if (error) {
    console.log("It didn't work!");
    return;
  }

  console.log(data);
  return data;
});

console.log(coordinates);

fetchISSFlyOverTimes({ latitude: 49.1665898, longitude: -123.133569 }, (error, data) => {
  console.log(data);
});