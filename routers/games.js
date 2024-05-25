const gamesRouter = require('express').Router()

const sendAllGames = require('../controllers/games');
const findAllGames = require('../middlewares/game');


gamesRouter.get("/games", findAllGames, sendAllGames);


module.exports = gamesRouter;