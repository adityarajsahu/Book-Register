const express = require("express");
const router = express.Router();

const booksController = require("../controllers/booksController");

router
    .post("/", booksController.addBook)
    .get("/", booksController.getBooks)
    .get("/:id", booksController.getBookById)
    .put("/:id", booksController.updateBook)
    .delete("/:id", booksController.deleteBook);

module.exports = router;
