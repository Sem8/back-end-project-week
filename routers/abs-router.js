const absRouter = require('express').Router();

absRouter.get('/', (req, res) => {
    res.send('Welcome to abs workout central');
})

module.exports = absRouter;