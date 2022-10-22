const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {
  for (const item of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(item.risetime);
    const duration = item.duration;

    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  console.log(passTimes);
  printPassTimes(passTimes);
});