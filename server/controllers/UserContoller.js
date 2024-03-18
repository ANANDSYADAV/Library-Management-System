const User = require('../DBModels/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        department, year, password, booksBorrowed } = req.body;

    try {
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(404).json({ message: "User already Exist." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await User.create({
            name,
            email,
            enrollment,
            registration,
            department,
            year,
            password: hashedPassword,
            booksBorrowed
        });
        const token = jwt.sign(
            { email: createdUser.email, id: createdUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        console.log(createdUser);
        res.status(200).json({ result: createdUser, token });

    } catch (error) {
        console.log("Error Msg: ", error);
        res.status(500).send("Error Occurred");
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User does not exist");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send("Incorrect password");
        }
        const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: user, token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred");
    }
}