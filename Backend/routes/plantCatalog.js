const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const build = require("../Module/plantCatalog/plantCatalogDBC");
// Require the fs module to read a JSON file
const bodyParser = require('body-parser');

const Plant = require("../Module/schemas/PlantSchema");
const uri = process.env.PLANTDB_URL;
const plantAPI = process.env.PERENNIALAPI_KEY;
const key = process.env.PERENNIALAPI_KEY_RAW;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// plant objects 
const { PlantOBJ, Zone, Seasson } = require('../Module/plantCatalog/plantObj');

router.get("/", async (req, res) => {
    try {
        await mongoose.connect(uri, clientOptions);
    } catch(error) {
        console.error("Error connecting to database: ", error);
        res.status(500).json({message: "Failed to retrieve documents"});
    }
    
    console.log("You are in plantCatalog.js");
    try {
        // const data = await Plant.find().limit(1);
        let numberOfEntries = parseInt(req.query.limit) || 5; 
        const data = await Plant.aggregate([{$sample: {size: numberOfEntries}}]);
        console.log("Sending Json Data");
        res.status(200).json({data});
    } catch(error) {
        console.error("Error fetching data:", error);
        res.status(500).json({message: "Failed to retrieve documents"});
    } finally {
        await mongoose.disconnect();
    }
});

router.post("/", (req, res) => {
    console.log("Posting in plantCatalog");
    console.log("name :" + req.body.name);  
    const javascriptObject = req.body;
    build(javascriptObject).catch(console.dir);
    res.status(200).json({message: "recieved JSON file"});
});

router.put("/", (req, res) => {
    console.log("Puting in update");
    res.status(200).json({message: "recieved JSON file"});
});

router.delete("/", (req, res) => {
    console.log("Deleteing item")
    res.status(200).json({message: "deleted"});
});

router.patch("/", async (req, res) => {
    console.log("Inside plantCatalog /patch");
    try {
        fetch(`${plantAPI}`, {
            method: 'GET'
        }).then(res => res.json())
        .then( data => {
                const dataArray = Object.values(data); // Convert object properties to array

                // get more plant information
                let plantDetails;
                dataArray[0].forEach(entry => {
                    id = entry["id"];
                    fetch(`https://perenual.com/api/species/details/${id}?key=${key}&`,{
                        method: 'GET'
                    }).then(res => res.json())
                    .then(details => {
                        console.log(details);
                        plantDetails = details;
                    })
                    .catch(error => {
                        throw new Error("Failed to fetch plant details: " + error);
                    })
                    console.log(plantDetails);
                    // const plantObj = new PlantOBJ({
                    //     id: entry["id"],
                    //     binomial_name: entry["scientific_name"][0],
                    //     name: entry["common_name"],
                    //     daily_watering: entry["watering"],

                    // })
                    // object.id = entry["id"];
                    // console.log(entry['id']);
                });
                res.status(200).json(dataArray[0]);
                // Access each plant data here
                // You can perform any other processing with each plant object here
        })
        .catch(error => {
            throw new Error("Failed to get plant data" + error);
        });
    } 
    catch (error){
        console.log("PLANTCATALOG PATCH DEBUG: " + error);
        res.status(500).json(error);
    }
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(`Getting user with id ${req.body.id}`);
        res.send(`Retreving user with ID: ${req.body.id}`);
    })
    .post((req, res) => {
        console.log(`Getting user with id ${req.body.id}`);
        res.send(`Posting user with ID: ${req.body.id}`);
    })
    .put((req, res) => {
        res.status(200).json({mesage: "/plantCatalog/put"});
        console.log("succes plantCatalog");
    })
    .patch((req, res) => {
        res.status(200).json({message: "/plantCatalog/patch"});
        console.log("succes plantCatalog");
    })
    .delete((req, res) => {
        console.log(`Getting user with id ${req.body.id}`);
        res.send(`Deletinguser with ID: ${req.body.id}`);
    })

module.exports = router;