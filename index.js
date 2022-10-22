const { fetchCoordsByIP } = require('./iss');
let myIP = '38.2.154.4';

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   myIP = ip;
//   return ip;
// });

fetchCoordsByIP(myIP, (error, data) => {
  if (error) {
    console.log("It didn't work!");
    return;
  }

  console.log(data);

});