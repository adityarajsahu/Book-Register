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
            return res.status(400).send({ message: "Some fields missing" });
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

let server_port = process.env.PORT || 4001;
app.listen(server_port, () => {
    console.log(`Server running on port ${server_port}`);
});
