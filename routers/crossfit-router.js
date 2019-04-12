const crossfitRouter = require("express").Router();

const crossfitdb = require("../database/dbConfig.js");

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

crossfitRouter.post("/");

module.exports = crossfitRouter;
