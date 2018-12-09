const express = require("express");
const logger = require("morgan");
const app = express();
const knex = require("./db/client");
const methodOverride = require("method-override");

app.use(methodOverride((req, res) =>{
    if(req.body && req.body._method){
        const method = req.body._method;
        return method;
        }
    })
);

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

// app.use((req,res,next)=>{
//     const quant = res.cookie.quant;
//     res.cookie("quant", quant);
//     res.locals.quant = "";
//     if(quant){
//         res.locals.quant = quant;
//         console.log(quant);
//     }
//     next();
// })

const baseRouter = require("./routes/base");
app.use("/", baseRouter);

const teamRouter = require("./routes/teams");
app.use("/teams", teamRouter);




// SERVER SETUP
const PORT = 5670;
const HOST = 'localhost';
app.listen(PORT, HOST, err =>{
    if(err){
        console.err(err);
    } else {
        console.log(`Server is now listening at http://${HOST}:${PORT}`);
    }
});