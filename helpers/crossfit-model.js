const crossfitdb = require("../database/dbConfig.js");

module.exports = {
  getCrossfitWods,
  getCorssfitWorkout,
  addCrossfitWod
};

function getCrossfitWods() {
  return crossfitdb("crossfitwod");
}

function getCorssfitWorkout(id) {
  return crossfitdb("crossfitwod")
    .where({ id })
    .first();
}

function addCrossfitWod(wod) {
  return crossfitdb("crossfitwod")
    .insert(wod)
    .then(([id]) => this.getCrossfitWods(id));
}
