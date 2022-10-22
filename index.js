const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  for (item of passTimes) {
    console.log(`Next pass at ${Date(item.risetime)} for ${item.duration} seconds!`);
  }
});