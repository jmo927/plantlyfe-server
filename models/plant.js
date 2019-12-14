const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlantSchema = new Schema({
    name: String,
    lastWater: String,
    waterAfter: Number
});

const Plant = mongoose.model("Plant", PlantSchema);
module.exports = Plant;