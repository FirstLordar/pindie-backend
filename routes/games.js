
const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvalible, checkIsGameExists, checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames, sendCreatedGame, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const {checkAuth} = require('../middlewares/auth');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames,checkIsGameExists, checkIfCategoriesAvalible, checkEmptyFields, checkAuth , createGame, sendCreatedGame  )
gamesRouter.get('/games/:id', findGameById, sendGameById)
gamesRouter.put('/games/:id',findGameById,checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvalible, checkEmptyFields, checkAuth ,updateGame, sendGameUpdated)
gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter;