const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

const data = [
    { name: "Tamir", age: 20 },
    { name: "Maxim", age: 21 },
    { name: "Diego", age: 20 },
]

app.get("/people", (req, res) => {
    res.send(data);
});

app.delete("/people/:id", (req, res) => {
    let id = req.params.id;
    data.splice(id, 1);
    res.send("done");
})

app.get("/people/:id", (req, res) => {
    let id = req.params.id;
    res.send(data[id]);
})


app.post("/people", (req, res) => {
    data.push(req.body);
    res.send(req.body);
})


app.listen(port, () => {
    console.log("Server running on port " + port);
});
