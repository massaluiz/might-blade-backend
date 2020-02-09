const mongoose = require('mongoose');

const DiceSchema = new mongoose.Schema({
    sides: String
});

module.exports = mongoose.model('Dice', DiceSchema);