const express = require('express');
const connectDB = require('./DBConnect.js');
const app = express();
const userModel = require('./DBModels/User');
const userRouter = require('./routes/UserRoutes');
const bookRouter = require('./routes/BookRouters');

connectDB();

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.use('/user', userRouter);
app.use('/book', bookRouter);


app.listen(3000, () => {
    console.log('Listening to port 3000');
});
