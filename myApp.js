let express = require('express');
let app = express();

// console.log("Hello World")

absPath = __dirname

app.use("/public", express.static(absPath+'/public'))

app.get("/", (req, res) => {
    res.sendFile(absPath+'/views/index.html');
})

app.get("/json", (req, res) => {
    res.json({"message":"Hello json"});
})

























 module.exports = app;
