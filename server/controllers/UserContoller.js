const User = require('../DBModels/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

exports.registerUser = async (req, res) => {
    const { name, email, enrollment, registration,
        department, year, password } = req.body;

    const createdUser = await User.create({
        "name": name,
        "email": email,
        "enrollment": enrollment,
        "registration": registration,
        "department": department,
        "year": year,
        "password": password
    });

    res.send(createdUser);
}