const express = require("express");
const logger = require("morgan");
const app = express();
const knex = require("./db/client");
const shuffle = require("shuffle-array");

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

app.use((req,res,next)=>{
    const quant = res.cookie.quant;
    res.cookie("quant", quant);
    res.locals.quant = "";
    if(quant){
        res.locals.quant = quant;
        console.log(quant);
    }
    next();
})

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

app.get("/index/:id", (req, res)=>{;
    const id = req.params.id;
    const splitType = req.query.teamSplit;
    const teamQuant = req.query.teamQuant;
    const quant = req.query.quant;
    // console.log(splitType);
    // console.log(teamQuant)
    // console.log(quant);
    knex.select('*').from('teams').where({id: id}).first().then(teamData =>{
            // console.log(teamData.members);
            let revCohortData = shuffle(teamData.members.split(","));
            let theSplit = Math.ceil(revCohortData.length/quant);
            let teamsArray = [];
            if(splitType == "numPerTeam"){
                // console.log("Team Count!");
                

                for (let i = 0; i < theSplit; i++){
	                teamsArray.push([])
                };

                while(revCohortData.length > 0){
                    for (let i = 0; i < teamsArray.length; i++){
                        if(revCohortData.length > 0){
                            for(let j = 0; j < quant; j ++){
                                if(revCohortData.length > 0){
                                    teamsArray[i].push(revCohortData.pop())
                                }
                            }
                           
                        } else {
                            break
                        }
                    }
                }

                // console.log(typeof(teamsArray))
            } else if(splitType == "teamCount"){

                for(let i = 0; i < quant; i++){
                    teamsArray.push([]);
                }
                
                while(revCohortData.length > 0){
                    for (let i = 0; i < teamsArray.length; i++){
                        if(revCohortData.length > 0){
                            teamsArray[i].push(revCohortData.pop())
                        } else {
                            break
                        }
                    }
                }
                // console.log("Per Team!");
            };
            // res.cookie("quant", quant)
            res.render("show", {teamData, splitType, revCohortData, teamsArray});
        });
});

app.post("/index/:id", (req, res) =>{
    const quant = req.cookie.quant;
    // console.log(quant)
    
    res.redirect("/index/:id", {quant})
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
});