// var mongoose = require('mongoose')
// , lth = require('../../config/lth')
// , should = require('should')
// , player = require('../../schemas/player')
// , jQuery = require('jquery')
// , sinon = require('sinon')
// , Backbone = require('backbone');

// // /*
// //  * To get the $ defined.
// //  */
// // Backbone.setDomLibrary(jQuery);


// // /**
// //  * Defines the Player model.
// //  *
// //  */
// // var PlayerModel = Backbone.Model.extend({
// //     idAttribute: "_id",    
// //     url : function() {
// // 	return this.id ? '/players/' + this.id : '/players'; 
// //     } 
// // });

// // /**
// //  * Defines the "Me" model.
// //  *
// //  */
// // var MeAsPlayerModel = Backbone.Model.extend({
    
// //     idAttribute: "_id",    
// //     url : function() {
// // 	return '/player/'; 
// //     } 
// // });

// //var fakeServer = require(require.resolve("sinon").replace(".js", "/util/fake_server.js"));
// // /**
// //  * Defines the Player collection.
// //  *
// //  */
// // var PlayersCollection = Backbone.Collection.extend({
// //     model : PlayerModel,
// //     url : "http://lth.lacoste.asiance-dev.com/players"
// // });

// // /**
// //  * Defines the Player view.
// //  *
// //  */
// // var playerView = Backbone.View.extend({

// //     initialize: function(){
// //         //this.render();
// //     },
// //     render: function(games){
	
// // 	//   var template = _.template( $("#search_template").html(), variables );
// // 	var template = _.template(list, {game: games });

// //         this.$el.html( template );
// //     },
// //     events: {
// //         //"click input[type=button]": "do"  
// //     },
// //     do: function( event ){
// //         //alert( "toto" + $("#s").val() );
// //     }
// // });

// // /*
// //  * Get the LTH general configuration.
// //  */
// // var config = lth.config();


// // describe("BMCollection", function(){

// //     var collec;

// //     beforeEach(function(){

// // 	collec = new PlayersCollection;
// //     });         

// //     it("is defined", function(){
// // 	console.log(collec);
// // 	collec.should.not.equal(undefined);
// //  	done();

// //     });

// // });

// // // describe('asiance_LTH', function(){
// // //     describe('#Test model', function(){
// // // 	it('should get me without error', function(done){

// // // 	    var me = new MeAsPlayerModel;

// // // 	    // playeView = new playerView({ el: $("#player_games") });

// // // 	    // prizeView = new playerView({ el: $("#prizes") });

// // // 	    me.fetch({success: function(){

// // // 		var my_attributes = me.get("0");

// // // 		var games = new Array();

// // // 		for( var i = 0 ; i < my_attributes.games.length ; i++) {

// // // 		    var oneGame = _.values(my_attributes.games[i]);
// // // 		    games.push(oneGame);
// // // 		}
// // // 		// playeView.render(games);

// // // 		var prizes = new Array();

// // // 		for( var i = 0 ; i < my_attributes.prizes.length ; i++) {

// // // 		    var onePrize = _.values(my_attributes.prizes[i]);
// // // 		    prizes.push(onePrize);
// // // 		}
// // // 		// prizeView.render(prizes);

// // // 	 	done();
// // // 	    }});
// // // 	})
// // //     })
// // // })

// var Episode = Backbone.Model.extend({
//   url: function() {
//     return "/episode/" + this.id;
//   }
// });


// describe("Episode model", function() {
//   beforeEach(function() {
//     this.server = sinon.fakeServer.create();
//   });
    
//   afterEach(function() {
//     this.server.restore();
//   });

//   it("should fire the change event", function() {
//     var callback = sinon.spy();
    
//     // // Set how the fake server will respond
//     // // This reads: a GET request for /episode/123 
//     // // will return a 200 response of type 
//     // // application/json with the given JSON response body
//     // this.server.respondWith("GET", "/episode/123",
//     //   [200, {"Content-Type": "application/json"},
//     //   '{"id":123,"title":"Hollywood - Part 2"}']);

//     // var episode = new Episode({id: 123});
    
//     // // Bind to the change event on the model
//     // episode.bind('change', callback);
    
//     // // makes an ajax request to the server
//     // episode.fetch(); 
    
//     // // Fake server responds to the request
//     // this.server.respond(); 
        
//     // // Expect that the spy was called with the new model
//     // expect(callback.called).toBeTruthy();
//     // expect(callback.getCall(0).args[0].attributes)
//     //   .toEqual({
//     //     id: 123,
//     //     title: "Hollywood - Part 2"
//     //   });
    
//   });

// });