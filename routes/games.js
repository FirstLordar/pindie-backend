
const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFiles} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGamebyId, sendGameUpdated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, checkEmptyFiles, createGame, sendGameCreated  )
gamesRouter.get('/game:id', findGameById, sendGamebyId)
gamesRouter.put('/games/:id', findGameById, updateGame, sendGameUpdated)
gamesRouter.delete('/games:id', deleteGame, sendGameDeleted)
module.exports = gamesRouter; 