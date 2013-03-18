/**
 * Include
 */
var mongoose = require('mongoose');
var qrnfc = require('./qrnfc');

var prize = new mongoose.Schema({

    name: String,
    sent: Boolean
});


var code = new mongoose.Schema({

    code: String,
});

var game = new mongoose.Schema({

    score: Number,
    collectedCodes: [code]
});

var players = new mongoose.Schema({

    name: String,
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



/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * PRIVATE FUNCTIONS 
 *
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/

/**
 * Search among the player's tags if the one is already scanned.  
 *
 */
function WasTagAlreadyScanned(player, req, res){

    for(var i = 0 ; i < player.games[req.body.gameId - 1].collectedCodes.length ; i++){

	console.log(player.games[req.body.gameId - 1].collectedCodes[i].code);

	if(player.games[req.body.gameId - 1].collectedCodes[i].code == req.body.code){

	    res.send({ error: 'You already have this tag!' });
	    return -1;
	}
    }
    return 0;
}


/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * PUBLIC FUNCTIONS 
 *
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/

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
    
    console.log(req.body);

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Player = db.model('players',players);
    
    db.once('open', function () {

    	var query = Player.find({facebook_id: req.session.player_fbId});
    	query.exec(function (err, player) {
    	    if(err){throw err; }

    	    res.header("Access-Control-Allow-Origin", "*"); 
    	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
     	    res.send(player);
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
    
    db.once('open', function () {

	var query = Player.find({facebook_id: req.body.fb_id});

    	query.exec(function (err, player) {
    	    if(err){throw err; }
    
	    /* if doesn't exist then create it */
	    if(player == "" ){
		console.log("has to be saved");

	    	var player = new Player;

	    	player.name = req.body.name;
	    	player.first_name = req.body.first_name;
	    	player.last_name = req.body.last_name;
	
	    	player.gender = req.body.gender;
	    	player.email = req.body.email; 

	    	player.picture = req.body.picture;
	    	player.facebook_id = req.body.fb_id;

		var game = {score: "", 
			    collectedCodes: []};

		for(var i = 0 ; i < 3 ; i++){
		    player.games.push(game);
		}

	    	player.save(function (err) {
    	    	    if(err){
    	    		console.log('ERROR');
    	    	    }
	    	    mongoose.disconnect();
	    	    /* to avoid 504 error */
	    	    // res.header("Access-Control-Allow-Origin", "*"); 
	    	    // res.header("Access-Control-Allow-Headers", "X-Requested-With");

	    	    res.send(player);
	    	});
	    }else{
	    	res.send(player);
	    }
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

    var tagSchema = qrnfc.getTagsSchema();

    var Tag = db.model( 'tags',tagSchema);
    
    db.once('open', function () {

	var query = Tag.findOne({ code: req.body.code });
    	query.exec(function (err, tag) {

   	    if (err) { console.log(err); }

	    /* Check code validity */
	    if( (tag != null) ){

		Player.findById(req.params.id, function (err, player) {

		    /* Does he have that tag? */
		    var status = WasTagAlreadyScanned(player, req, res);

		    if(status == 0){

			player.games[req.body.gameId - 1].score++ ;
			player.games[req.body.gameId - 1].collectedCodes.push({code:req.body.code});

			player.save(function (err) {
    		    	    if(err){
    		    		console.log('ERROR');
    		    	    }
		    	    /* to avoid 504 error */
		    	    res.send(player);
		    	    mongoose.disconnect();
			});
		    }
		});
	    }
	    else{
		res.send({ error: 'This tag does not exist' });
		mongoose.disconnect();
	    }
	});
    });
}



/**
 * DELETE all players 
 *
 */
exports.deletePlayers = function(req ,res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');
    var Player = db.model('players',players);
    
    db.once('open', function () {

	Player.remove(function (err) {
	    if (!err) {
		console.log("removed");
		res.send('');
		mongoose.disconnect();
	    } else {
		console.log(err);
	    }
	});
    });
}