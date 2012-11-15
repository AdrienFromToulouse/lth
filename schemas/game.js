/**
 * Include
 */
var mongoose = require('mongoose');


// var prize = new mongoose.Schema({

//     name: String,
//     sent: Boolean
// });


var player = new mongoose.Schema({

    name: String,
    // score: Number,

});

var game = new mongoose.Schema({

    name: String,
    players: [player],
});
