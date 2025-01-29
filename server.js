const express = require("express");

const app = express();

const port = 3000;

const data = [
    { name: "Tamir", age: 20 },
    { name: "Maxim", age: 21 },
    { name: "Diego", age: 20 },
]


app.get("/people", (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});
