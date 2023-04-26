const dotenv = require('dotenv');
dotenv.config({ path: './config/env' });
const indexRouter = require('./routers/indexRouter');
const userRouter = require('./routers/userRouter');

const { checkUser } = require('./middleware/authentication');

const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
app.set('view engine', 'ejs');

// register view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// routes
app.use('*', checkUser);
app.use('/', indexRouter);
app.use('/user', userRouter);