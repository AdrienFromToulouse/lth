/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, http = require('http')
, path = require('path')
, mongoose = require('mongoose')
, lth = require('./config/lth')
, shop = require('./schemas/shop')
, prize = require('./schemas/prize')
, player = require('./schemas/player');

/**
 * APP variable
 *
 */
var app = express();


/**
 * Config
 */
app.configure(function(){
    app.set('port', process.env.PORT || 3102);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(__dirname + '/public/images/croco-red.png'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

 
    app.use(express.cookieParser('keyboard cat'));
    app.use(express.session());

    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.errorHandler({showStack: true, dumpExceptions: true}));
    app.use(express.vhost('lacoste.lth.asiance-dev.com', app));
});


/**
 * Development: export NODE_ENV=development or NODE_ENV=development node app
 */
app.configure('development', function(){

    console.log("STARTED IN development MODE");
    app.use(express.errorHandler());

    /**
     * General
     */
    app.get('/',routes.index);


    /**
     * User login
     */
    app.post('/login',routes.create_session);

    /**
     * Dashboard
     */
    app.get('/dashboard',routes.dashboard);

    /**
     * Admin Dashboard
     */
    app.get('/admin',routes.admin);

    /**
     * Get all the shops
     */
    app.get('/shops', function(req, res){
    	shop.getShops(req, res);
    });

    /**
     * READ all the players
     */
    app.get('/players', function(req, res){
	console.log("READ PLAYERS");	
    	player.getPlayers(req, res);
    });
    /**
     * CREAT a player
     */
    app.post('/players', function(req, res){

	req.session.player_fbId = req.body.fb_id;
	req.session.player_name = req.body.first_name;

	console.log("CREATE PLAYER");
    	player.createPlayer(req, res);
    });
    /**
     * UPDATE a player
     */
    app.put('/players/:id', function(req, res){
	console.log("UPDATE PLAYER");
    	player.updatePlayer(req, res);
    });

    /**
     * READ a player
     */
    app.get('/player', function(req, res){
	console.log("GET A PLAYER");
    	player.getPlayer(req, res);
    });

    /**
     * DELETE all players (used in test only)
     */
    app.delete('/players',function(req, res){
	console.log("DELETE ALL PLAYERS");
    	player.deletePlayers(req, res);
    });

    // /**
    //  * CHECK qrcode validity
    //  */
    // app.delete('/checkCodeValidity',function(req, res){
    // 	console.log("DELETE ALL PLAYERS");
    // 	player.deletePlayers(req, res);
    // });
 
    /**
     * READ all the prizes
     */
    app.get('/prizes', function(req, res){
	console.log("READ PRIZES");	
    	prizes.getPrizes(req, res);
    });

});

/**
 * Create server
 */
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});