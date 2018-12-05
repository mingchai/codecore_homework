const express = require("express");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));


// SERVER SETUP
const PORT = 5670;
const HOST = 'localhost';
app.listen(PORT, HOST, err =>{
    if(err){
        console.err(err);
    } else {
        console.log(`Server is now listening at http://${HOST}:${PORT}`);
    }
})