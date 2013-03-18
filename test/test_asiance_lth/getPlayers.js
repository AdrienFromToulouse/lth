var mongoose = require('mongoose')
, lth = require('../../config/lth')
, should = require('should')
, player = require('../../schemas/player');


/*
 * Get the LTH general configuration.
 */
var config = lth.config();


describe('asiance_LTH', function(){
    describe('#getPlayers()', function(){
	it('should get players without error', function(done){

	    var db = mongoose.createConnection('localhost', 'asiance_LTH');

	    var players = player.getPlayerSchema();

	    var Player = db.model('players',players);
	    
	    db.once('open', function () {

		var query = Player.find();
    		query.exec(function (err, players) {
    		    if(err){throw err; }

		    should.exist(players[0]);
		    
		    players[0].should.have.property('firstname', 'PlayerfirstnameX');
		    players[0].should.have.property('lastname', 'PlayerlastnameY');

		    players[0].games[0].should.have.property('collectedCodes');
		    players[0].games[0].should.have.property('score', 1984);
		    players[0].games[1].should.have.property('collectedCodes');
		    players[0].games[1].should.have.property('score', 1985);

		    players[0].prizes[0].should.have.property('name', 'prize1');
		    players[0].prizes[0].should.have.property('sent', false);
		    players[0].prizes[1].should.have.property('name', 'prize2');
		    players[0].prizes[1].should.have.property('sent', true);

		    players[1].should.have.property('firstname', 'PlayerfirstnameX2');
		    players[1].should.have.property('lastname', 'PlayerlastnameY2');

		    players[1].games[0].should.have.property('collectedCodes');
		    players[1].games[0].should.have.property('score', 1989);
		    players[1].games[1].should.have.property('collectedCodes');
		    players[1].games[1].should.have.property('score', 1990);

		    players[1].prizes[0].should.have.property('name', 'prize12');
		    players[1].prizes[0].should.have.property('sent', true);
		    players[1].prizes[1].should.have.property('name', 'prize22');
		    players[1].prizes[1].should.have.property('sent', false);

		    done();
		    mongoose.disconnect();
    		});
	    });
	})
    })
})