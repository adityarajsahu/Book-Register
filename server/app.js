if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const booksRoute = require("./routes/booksRoute");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);

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

app.use("/books", booksRoute);

let server_port = process.env.PORT || 4001;
app.listen(server_port, () => {
    console.log(`Server running on port ${server_port}`);
});
