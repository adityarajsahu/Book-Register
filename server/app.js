if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();

let server_port = process.env.PORT || 4001;
app.listen(server_port, () => {
    console.log(`Server running on port ${server_port}`);
});
