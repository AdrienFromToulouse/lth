/**
 * Include
 */
var mongoose = require('mongoose');

var prizes = new mongoose.Schema({

    name: String,
    quantity: Number,
    game: Number
});


/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * PRIVATE FUNCTIONS 
 *
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/


/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * PUBLIC FUNCTIONS 
 *
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/

/**
 * Used in tests.
 *
 */
exports.getPlayerSchema = function(){
    return prizes;
}




/**
 * Get all the prizes from the data base. 
 *
 */
exports.getPrizes = function(req ,res){

    var db = mongoose.createConnection('localhost', 'asiance_LTH');

    var Prize = db.model('prizes',players);
    
    db.once('open', function () {

	var query = Prize.find();
    	query.exec(function (err, prizes) {
    	    if(err){throw err; }

	    res.header("Access-Control-Allow-Origin", "*"); 
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.send(prizes);

	    mongoose.disconnect();
    	});
    });
};





