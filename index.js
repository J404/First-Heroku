const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({
        hello: "world"
    });
});

server.listen(app);
console.log("Listening on port 3000");