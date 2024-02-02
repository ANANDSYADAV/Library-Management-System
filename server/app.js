const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./routes/UserRoutes');
const bookRouter = require('./routes/BookRouters');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.use('/user', userRouter);
app.use('/book', bookRouter);


app.listen(3000, () => {
    console.log('Listening to port 3000');
});
