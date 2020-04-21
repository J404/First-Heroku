const express = require("express");
const app = express();

const server = require("http").createServer(app);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({
        hello: "world"
    });
});

server.listen(port);
console.log("Listening on port 3000");