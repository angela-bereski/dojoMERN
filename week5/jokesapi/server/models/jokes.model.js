const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
});
 
const Joke = mongoose.model('joke', JokeSchema);
 
module.exports = Joke;