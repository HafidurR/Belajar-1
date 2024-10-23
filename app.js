require('dotenv').config();
const express           = require('express');
const path              = require("path");
const cookieParser      = require('cookie-parser');
const logger            = require("morgan");
const app               = express();
const port              = process.env.PORT;

const authRouter = require('./router/user.routes');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Middleware configuration
app.use(logger('dev'));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/login', authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'url not found'
  });
  next()
})

app.listen(port, () => {
  console.log(`Running on port : ${port}`);
})

module.exports = app;
