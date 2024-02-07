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
        department, year } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const createdUser = await User.create({
            name,
            email,
            enrollment,
            registration,
            department,
            year,
            password: hashedPassword
        })
        res.send(createdUser);
    } catch (error) {
        res.status(500).send("Error Occured");
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await User.findOne({ email });
        if (!existinguser) {
          return res.status(404).json({ message: "User don't Exist." });
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
        if (!isPasswordCrt) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
        if(isPasswordCrt){
            return res.status(200).json({message: "login successfull"})
        }
    } catch {
      res.status(500).send()
    }
  }