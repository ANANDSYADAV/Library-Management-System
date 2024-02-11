const User = require('../DBModels/User');
const bcrypt = require('bcrypt');

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

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await User.create({
            name,
            email,
            enrollment,
            registration,
            department,
            year,
            password: hashedPassword
        })
        console.log(createdUser); 
        res.status(201).send(createdUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error Occurred");
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user == null) {
            res.status(400).send("User Does Not Exist");
        }
        else if (await bcrypt.compare(password, user.password)) {
            console.log("Login Success");
            res.send("Login Successful");
        } else {
            res.send("Login First");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error Occured");
    }
}
