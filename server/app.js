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

// app.get('/user', async (req, res) => {
//     const createdUser = await userModel.create({
//         name: 'Anand',
//         email: 'abcd@gmail.com',
//         enrollment: '21ICS140',
//         registration: 2114373,
//         Department: 'CSE',
//         Year: 3,
//     });
//     res.send(createdUser);
// });

app.listen(3000, () => {
    console.log('Listening to port 3000');
});