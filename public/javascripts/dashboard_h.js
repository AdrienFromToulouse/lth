/**
 * Defines the Player model.
 *
 */
var PlayerModel = Backbone.Model.extend({
    idAttribute: "_id",    
    url : function() {
	return this.id ? '/players/' + this.id : '/players'; 
    } 
});

/**
 * Defines the "Me" model.
 *
 */
var MeAsPlayerModel = Backbone.Model.extend({
    
    idAttribute: "_id",    
    url : function() {
	return '/player/'; 
    } 
});


/**
 * Defines the Player collection.
 *
 */
var PlayersCollection = Backbone.Collection.extend({
    model : PlayerModel,
    url : "http://lth.lacoste.asiance-dev.com/players"
});

/**
 * Defines the Player view.
 *
 */
var playerView = Backbone.View.extend({

    initialize: function(){
        //this.render();
    },
    render: function(games){
	
	//   var template = _.template( $("#search_template").html(), variables );
	var template = _.template(list, {game: games });

        this.$el.html( template );
    },
    events: {
        //"click input[type=button]": "do"  
    },
    do: function( event ){
        //alert( "toto" + $("#s").val() );
    }
});


/**
 * Defines the Prize view.
 *
 */
var prizeView = Backbone.View.extend({
    render: function(prizes){
	
	var template = _.template(prizesList, {prize: prizes });

        this.$el.html( template );
    },
});


/**
 * Defines the main dashboard object.
 *
 */
var lth_dashboard = {

    init: function(){

	var me = new MeAsPlayerModel;

	playeView = new playerView({ el: $("#player_games") });

	prizeView = new playerView({ el: $("#prizes") });

	me.fetch({success: function(){

	    var my_attributes = me.get("0");

	    var games = new Array();

	    for( var i = 0 ; i < my_attributes.games.length ; i++) {

		var oneGame = _.values(my_attributes.games[i]);
		games.push(oneGame);
	    }
	    playeView.render(games);

	    var prizes = new Array();

	    for( var i = 0 ; i < my_attributes.prizes.length ; i++) {

		var onePrize = _.values(my_attributes.prizes[i]);
		prizes.push(onePrize);
	    }
	    prizeView.render(prizes);
   	    
	}}); 
   },
}