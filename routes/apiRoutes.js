// Dependencies
const fs = require("fs");
const Plant = require("../models/plant");

module.exports = function (app) {

    app.get("/api/plants", (req, res) => {
        Plant.find({})
        .then(data => {
            // console.log("plant data retrieved")
            res.send({ plants: data })
        })
    });

    app.get("/api/plants/:data", (req, res) => {
        // console.log(req.params.data);
        Plant.find()
        .then(data => {
            const output = data.filter(plant => {
                const thisDay = new Date(req.params.data);
                const lastWater = new Date(plant.lastWater);
                let dayDiffInMilli = thisDay.getTime() - lastWater.getTime();
                let dayDiff = Math.floor(dayDiffInMilli / (1000 * 60 * 60 * 24));

                if (dayDiff % plant.waterAfter == 0) {
                    return plant;
                }
            })
            res.send(output);
        })
    });

    // Adds new plant to take care of.
    app.post("/api/addplant", (req, res) => {
        Plant.create({
            name: req.body.name,
            waterAfter: req.body.waterAfter,
            lastWater: req.body.lastWater
        }).then(result => {
            console.log("adding plant");
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    // Updates lastWater to change some date math for future weeks.
    app.put("/api/update/:id", (req, res) => {
        // console.log(req.params.id);
        const today = new Date();
        const todayStr = today.toDateString();
        Plant.update({ _id: req.params.id }, { lastWater: todayStr })
            .then(result => {
                res.json(result);
            })
    });

    app.delete("/api/delete/:id", (req, res) => {
        console.log(req.params.id);
        Plant.deleteOne({_id: req.params.id})
            .then(result => {
                res.send(result);
            })
    })
};
