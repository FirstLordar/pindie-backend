const express = require('express');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories')
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
  usersRouter, 
  gamesRouter, 
  categoriesRouter,
  mainRoute
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})