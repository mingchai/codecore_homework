const express = require("express");
const router = express.Router();
const knex = require("../db/client");
const shuffle = require("shuffle-array");

router.get("/new_cohort", (req, res)=>{
    res.render("newCohort");
});

router.post("/new_cohort", (req, res) =>{
    const logoUrl = req.body.logoUrl;
    const name = req.body.name;
    const members = req.body.members;

    const newCohort = {
        logoUrl,
        name,
        members
    };

    knex("teams").insert(newCohort).returning("*").then(()=>{
        res.redirect("/teams")
    });
});

router.get("/", (req, res)=>{

    knex
    .select('*')
    .from('teams')
    .then(cohortData =>{
        revCohortData = cohortData.map(cohort =>{
            let revCohort = cohort.members.split(",");
            
            let revCohortData = shuffle(revCohort);
            // console.log(revCohortData)
            res.render("index", {cohortData, revCohortData});
        });
    });
});

router.get("/:id", (req, res)=>{;
    const id = req.params.id;
    const splitType = req.query.teamSplit;
    const teamQuant = req.query.teamQuant;
    const quant = req.query.quant;
    // console.log(splitType);
    // console.log(teamQuant)
    // console.log(quant);
    knex.select('*').from('teams').where('id', id).first().then(teamData =>{
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

router.delete('/:id', (req, res)=>{
    const id = req.params.id
    knex("teams")
        .where('id', id)
        .del()
        .then(()=>{
            // res.send("Delete request received")
            res.redirect('/teams')  
        });
    });

router.get('/:id/edit', (req, res)=>{
    const id = req.params.id
    knex   
        .select("*")
        .from("teams")
        .where('id', id)
        .first()
        .then((team)=>{
            if(!team){
                next(new Error ("team not found! It may have been deleted"))
            } else {
                res.render("edit", {team})
            } 
        });
});

router.patch('/:id', (req, res)=>{
    const id = req.params.id;  
    knex("teams")
        .where('id',id)
        .update({
            logoUrl: req.body.logoUrl,
            name: req.body.name,
            members: req.body.members
        })
        .then(()=>{
            res.redirect(`/teams/${id}`)
        });
    });

module.exports = router;