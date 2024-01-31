const Author = require('../DBModels/Book');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(404).send(error.message);
    }
}