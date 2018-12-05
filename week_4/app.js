const express = require("express");
const logger = require("morgan");
const app = express();
const knex = require("./db/client");
const shuffle = require("shuffle-array");

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

app.get("/", (req,res)=>{
    res.render("homePage");
});

app.get("/new_cohort", (req, res)=>{
    res.render("newCohort");
});

app.post("/new_cohort", (req, res) =>{
    const logoUrl = req.body.logoUrl;
    const name = req.body.name;
    const members = req.body.members;

    const newCohort = {
        logoUrl,
        name,
        members
    };

    knex("teams").insert(newCohort).returning("*").then(()=>{
        res.redirect("/index")
    });
});

app.get("/index", (req, res)=>{

    knex.select('*').from('teams').then(cohortData =>{
        revCohortData = cohortData.map(cohort =>{
            let revCohort = cohort.members.split(",");
            
            let revCohortData = shuffle(revCohort);
            console.log(revCohortData)
            res.render("index", {cohortData, revCohortData});
        });
        // res.render("index", {cohortData, revCohortData});
    });

})

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