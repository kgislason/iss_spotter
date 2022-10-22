const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {
  for (const item of passTimes) {
    console.log(`Next pass at ${Date(item.risetime)} for ${item.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  printPassTimes(passTimes);
});