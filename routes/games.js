
const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFiles, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGamebyId, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const {checkAuth} = require('../middlewares/auth');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames,checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFiles, checkAuth , createGame, sendGameCreated  )
gamesRouter.get('/game:id', findGameById, sendGamebyId)
gamesRouter.put('/games/:id',findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFiles, checkAuth ,updateGame, sendGameUpdated)
gamesRouter.delete('/games:id', checkAuth, deleteGame, sendGameDeleted)
module.exports = gamesRouter; 