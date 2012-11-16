/**
 * Include
 */
var mongoose = require('mongoose');


var prize = new mongoose.Schema({

    name: String,
    sent: Boolean
});


var game = new mongoose.Schema({

    name: String,
    score: Number,

});

var players = new mongoose.Schema({

    firstname: String,
    lastname: String,

    gender: String,
    country: String,
    email: String,

    password: String,
    request_password: String,

    address: String,
    phone: String,
    facebook_id: String,
    picture: String,

    games: [game],
    prizes: [prize]
});



/**
 * Used in tests.
 *
 */
exports.getPlayerSchema = function(){
    return players;
}



/**
 * Get all the players from the data base. 
 *
 */
exports.getPlayers = function(req ,res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Player = db.model('players',players);
    
    db.once('open', function () {

	var query = Player.find();
    	query.exec(function (err, players) {
    	    if(err){throw err; }

	    res.header("Access-Control-Allow-Origin", "*"); 
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.send(players);

	    mongoose.disconnect();
    	});
    });
};


/**
 * Get a player from the data base. 
 *
 */
exports.getPlayer = function(req ,res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Player = db.model('players',players);
    
    db.once('open', function () {

	var query = Player.find();
    	query.exec(function (err, players) {
    	    if(err){throw err; }

	    res.header("Access-Control-Allow-Origin", "*"); 
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.send(players);

	    mongoose.disconnect();
    	});
    });
};



/**
 * CREATE a player 
 *
 */
exports.createPlayer = function(req ,res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Player = db.model('players',players);

    var player = new Player;
    
    db.once('open', function () {

	player.firstname = req.body.firstname;

	player.save(function (err) {
    	    if(err){
    		console.log('ERROR');
    	    }
	    /* to avoid 504 error */
	    // res.header("Access-Control-Allow-Origin", "*"); 
	    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.send(player);

	    mongoose.disconnect();
	});
    });
};


/**
 * UPDATE a player 
 *
 */
exports.updatePlayer = function(req ,res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Player = db.model('players',players);
    
    db.once('open', function () {

	Player.findById(req.params.id, function (err, player) {

	    player.firstname = req.body.firstname;
	    
	    player.save(function (err) {
    		if(err){
    		    console.log('ERROR');
    		}
		/* to avoid 504 error */
		res.send(player);
		mongoose.disconnect();
	    });
	});
    });
}
	   