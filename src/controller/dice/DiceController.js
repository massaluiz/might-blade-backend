const axios = require('axios');
const Dice = require('../../model/Dice');

// Métodos que devem existir em um controller

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const dices = await Dice.find();

        return response.json(dices);
    },

    async store(request, response) {

        const {sides} = request.body;

        let dice = await Dice.findOne({ sides });

        if(!dice) {
    
          dice = await Dice.create({
              sides
          });   

        }
    
        return response.json(dice);
    },

    async update() {

    },

    async destroy() {
        
    }
};