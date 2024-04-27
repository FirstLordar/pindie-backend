const express = require('express');
const mainRoute = require('./routers/main');
const gamesRouter = require('./routers/games');
const usersRouter = require('./routers/users');
const categoriesRouter = require('./routers/categories')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const connectToDatabase = require('./database/connect');


const PORT = 3000;
const app = express();
connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  mainRoute,
  gamesRouter,
  usersRouter,
  categoriesRouter
)

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})