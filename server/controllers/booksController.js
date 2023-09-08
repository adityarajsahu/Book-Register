const Book = require("../models/Book");

module.exports.addBook = async (req, res) => {
    try {
        const { title, author, publishYear, description } = req.body;
        if (!title || !author || !publishYear || !description) {
            return res.status(400).send({ message: "Some fields are missing" });
        }

        const book = await Book.create({
            title: title,
            author: author,
            publishYear: publishYear,
            description: description,
        });
        res.status(201).send(book);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Internal Server Error" });
    }
};

module.exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send({
            count: books.length,
            data: books,
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send(book);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports.updateBook = async (req, res) => {
    try {
        const { title, author, publishYear, description } = req.body;
        if (!title || !author || !publishYear || !description) {
            return res.status(400).send({ message: "Some fields are missing" });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book updated successfully" });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });
    }
};

module.exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.message });
    }
};
