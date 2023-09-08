if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");

const Book = require("./models/Book");

const app = express();
app.use(express.json());

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    // console.log(req);
    return res.status(234).send("Hello World");
});

app.post("/books", async (req, res) => {
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
});

app.get("/books", async (req, res) => {
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
});

app.get("/books/:id", async (req, res) => {
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
});

app.put("/books/:id", async (req, res) => {
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
});

app.delete("/books/:id", async (req, res) => {
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
});

let server_port = process.env.PORT || 4001;
app.listen(server_port, () => {
    console.log(`Server running on port ${server_port}`);
});
