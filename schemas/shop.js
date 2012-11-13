/**
 * Include
 */
var mongoose = require('mongoose');


var shop = new mongoose.Schema({

    name: String,
    latitude: Number,
    longitude: Number,
    schedule: String,
    address: String,
    phone: String,
    mission: String
});


var city = new mongoose.Schema({

    name: String,
    shops: [shop]
});

var shops = new mongoose.Schema({

    name: String,
    cities: [city]
});


/**
 * Used in tests.
 *
 */
exports.getShopSchema = function(){
    return shops;
}





/**
 * Get all the shops from the data base. 
 *
 * @param[in]: req - request 
 * @param[in]: res - response
 *
 */
exports.getShops = function(req, res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Shop = db.model('shop',shops);
    
    db.once('open', function () {

	var query = Shop.find();
    	query.exec(function (err, shops) {
    	    if(err){throw err; }

	    var shops = JSON.stringify(shops[0].cities);

	    res.header('Content-Type', 'application/json');
	    res.header('Charset', 'utf-8') 
	    res.send(req.query.jsoncallback + "("+shops+")"); 

	    mongoose.disconnect();
    	});
    });
};



// /**
//  * 
//  */
// exports.updateScore = function(message){

//     var playerSchema = createSchema();

//     console.log("update score player");

//     db = mongoose.createConnection('localhost', 'babyfootDb');

//     var Player = db.model('Player', playerSchema);

//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.on('close', console.error.bind(console,"update player score closed"));
//     db.once('open', function () {

// 	var query = Player.find().sort({ logged_at: 'desc'}).limit(4);
//     	query.exec(function (err, players) {
//     	    if (err) { throw err; }

// 	    for(i = 0 ; i < PLYR_NBROF_PLAYER ; i++){
// 		switch(players[i].position)
// 		{
// 		case 1:
// 		    players[players[i].position-1].update({ 
// 			stats: { "cendriers": 0, 
// 	    			 "reprises": 0, 
// 	    			 "pissettes": 0, 
// 	    			 "gamelles": 0, 
// 				 "score_attack":  message.score[P1_ATTACKER],
// 				 "score_defense": message.score[P1_DEFENSER]}},
// 	    						  function (err) {
// 	    						      if (err) { throw err; }
// 	    						  });
// 		    break;
// 		case 2:
// 		    players[players[i].position-1].update({ 
// 			stats: { "cendriers": 0, 
// 	    			 "reprises": 0, 
// 	    			 "pissettes": 0, 
// 	    			 "gamelles": 0, 
// 				 "score_attack":  message.score[P2_ATTACKER],
// 				 "score_defense": message.score[P2_DEFENSER]}},
// 	    						  function (err) {
// 	    						      if (err) { throw err; }
// 	    						  });
// 		    break;
// 		case 3:
// 		    players[players[i].position-1].update({ 
// 			stats: { "cendriers": 0, 
// 	    			 "reprises": 0, 
// 	    			 "pissettes": 0, 
// 	    			 "gamelles": 0, 
// 				 "score_attack":  message.score[P3_ATTACKER],
// 				 "score_defense": message.score[P3_DEFENSER]}},
// 	    						  function (err) {
// 	    						      if (err) { throw err; }
// 	    						  });
// 		    break;
// 		case 4:
// 		    players[players[i].position-1].update({ 
// 			stats: { "cendriers": 0, 
// 	    			 "reprises": 0, 
// 	    			 "pissettes": 0, 
// 	    			 "gamelles": 0, 
// 				 "score_attack":  message.score[P4_ATTACKER],
// 				 "score_defense": message.score[P4_DEFENSER]}},
// 	    						  function (err) {
// 	    						      if (err) { throw err; }
// 	    						  });
// 		    break;
// 		default:
// 		    break;
// 		}
// 	    }
// 	    mongoose.disconnect();
//     	});
//     });
// };



// // /**
// //  * Update the current players context. 
// //  * It will be hard written in database on game Stop.
// //  */
// // exports.updateContext = function(message){
   
// //     console.log("update context player");

// //     players_ctxt.score[P1_ATTACKER] = message.score[P1_ATTACKER];
// //     players_ctxt.score[P1_DEFENSER] = message.score[P1_DEFENSER];
// //     players_ctxt.score[P2_ATTACKER] = message.score[P2_ATTACKER];
// //     players_ctxt.score[P2_DEFENSER] = message.score[P2_DEFENSER];
// //     players_ctxt.score[P3_ATTACKER] = message.score[P3_ATTACKER];
// //     players_ctxt.score[P3_DEFENSER] = message.score[P3_DEFENSER];
// //     players_ctxt.score[P4_ATTACKER] = message.score[P4_ATTACKER];
// //     players_ctxt.score[P4_DEFENSER] = message.score[P4_DEFENSER];

// // };






// // exports.getCurrentPlayers = function(bayeux){

// //     var message = {
// //     	"score" :    [0, 0, 0, 0, 0, 0, 0, 0],
// //     	"gamelle" :  [0, 0, 0, 0, 0, 0, 0, 0],
// //     	"cendrier" : [0, 0, 0, 0, 0, 0, 0, 0],
// //     	"pissette" : [0, 0, 0, 0, 0, 0, 0, 0],
// //     	"reprise" :  [0, 0, 0, 0, 0, 0, 0, 0],
// //     	"player" :   [{"imageP1": "", 
// //     		       "firstnameP1": ""},
// //     		      {"imageP2": "", 
// //     		       "firstnameP2": ""},
// //     		      {"imageP3": "", 
// //     		       "firstnameP3": ""},
// //     		      {"imageP4": "", 
// //     		       "firstnameP4": ""}]
// //     };
   
// //     for(i = 0 ; i < PLYR_NBROF_PLAYER ; i++){
// // 	switch(players[i].position)
// // 	{
// // 	case 1:
// // 	    message.player[players[i].position-1].imageP1 = '<img src="'+this.players_ctxtplayers[i].personal.picture+'">';
// // 	    message.player[players[i].position-1].firstnameP1 = players[i].personal.first_name;
// // 	    message.score[P1_ATTACKER] = players[i].stats.score_attack;
// // 	    message.score[P1_DEFENSER] = players[i].stats.score_defense;
// // 	    break;
// // 	case 2:
// // 	    message.player[players[i].position-1].imageP2 = '<img src="'+players[i].personal.picture+'">';
// // 	    message.player[players[i].position-1].firstnameP2 = players[i].personal.first_name;
// // 	    message.score[P2_ATTACKER] = players[i].stats.score_attack;
// // 	    message.score[P2_DEFENSER] = players[i].stats.score_defense;
// // 	    break;
// // 	case 3:
// // 	    message.player[players[i].position-1].imageP3 = '<img src="'+players[i].personal.picture+'">';
// // 	    message.player[players[i].position-1].firstnameP3 = players[i].personal.first_name;
// // 	    message.score[P3_ATTACKER] = players[i].stats.score_attack;
// // 	    message.score[P3_DEFENSER] = players[i].stats.score_defense;
// // 	    break;
// // 	case 4:
// // 	    message.player[players[i].position-1].imageP4 = '<img src="'+players[i].personal.picture+'">';
// // 	    message.player[players[i].position-1].firstnameP4 = players[i].personal.first_name;
// // 	    message.score[P4_ATTACKER] = players[i].stats.score_attack;
// // 	    message.score[P4_DEFENSER] = players[i].stats.score_defense;
// // 	    break;
// // 	default:
// // 	    break;
// // 	}
// //     }
// //     bayeux.getClient().publish('/channel_index',message);
// // };
