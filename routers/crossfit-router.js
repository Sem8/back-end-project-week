const crossfitRouter = require("express").Router();

const crossfitdb = require("../database/dbConfig.js");
const crossfitWods = require("../helpers/crossfit-model.js");

crossfitRouter.get("/", (req, res) => {
  crossfitdb("crossfitwod")
    .then(crossfitwods => {
      res.status(200).json(crossfitwods);
    })
    .catch(error => {
      res.status(500).json({
        message: `The Crossfit Wod could not be retrieved: ${error}`
      });
    });
  // res.send('Welcome to your Crossfit WOD center')
});

crossfitRouter.post("/", async (req, res) => {
  const { Workout_Name, Warmup, Workout_Structure, Workout } = req.body;
  if (!Workout_Name && !Warmup && !Workout_Structure && !Workout) {
    res
      .status(400)
      .json({ message: `Bad request, submit all required fields` });
  } else {
    try {
      const newCrossfitWod = req.body;
      crossfitWods.addCrossfitWod(newCrossfitWod).then(crossfitWod => {
        res.status(201).json(crossfitWod);
      });
    } catch (error) {
      res.status(500).json({
        error: `There was an error while saving the crossfit workout to the database: ${error}`
      });
    }
  }
});

module.exports = crossfitRouter;
