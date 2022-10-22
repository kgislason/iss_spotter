const { fetchMyIP, fetchCoordsByIP } = require('./iss');
let myIP = '';

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  myIP = ip;
  return ip;
});

console.log('My IP', myIP);

fetchCoordsByIP(myIP, (error, data) => {
  if (error) {
    console.log("It didn't work!");
    return;
  }

  console.log(data);

});