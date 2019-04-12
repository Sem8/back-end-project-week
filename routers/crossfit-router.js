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

crossfitRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  crossfitdb("crossfitwod")
    .where({ id })
    .first()
    .then(crossfitWod => {
      res.status(200).json(crossfitWod);
    })
    .catch(error => {
      res
        .status(500)
        .json({
          message: `Error occurred while retrieving crossfit workout: ${error}`
        });
    });
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

crossfitRouter.delete("/:id", async (req, res) => {
  try {
    const count = await crossfitdb("crossfitwod")
      .where({ id: req.params.id })
      .del();
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Crossfit workout not found" });
    }
  } catch (error) {
    res.status(500).json({
      error: `Error occurred while deleting this crossfit workout: ${error}`
    });
  }
});

module.exports = crossfitRouter;
