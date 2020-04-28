const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/route", (req, res) => {
    res.send({ msg: "Hello, route! "});
})

app.listen(port);
console.log("Listening on port 3000");