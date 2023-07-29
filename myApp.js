let express = require('express');
let app = express();
require('dotenv').config()

// console.log("Hello World")

absPath = __dirname

app.use("/public", express.static(absPath+'/public'))

app.use((req, res, next) => {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
})
app.get("/", (req, res) => {
    res.sendFile(absPath+'/views/index.html');
})

app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message":"Hello json".toUpperCase()});
    }else{
        res.json({"message":"Hello json"});
    }
    
})

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time":req.time})
})


























 module.exports = app;
