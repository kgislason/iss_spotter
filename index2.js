const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = (body) => {
  for (const item of body) {
    const date = new Date(0);
    date.setUTCSeconds(item.risetime);
    const duration = item.duration;

    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
