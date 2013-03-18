/**
 * Defines the Prize view.
 *
 */
var prizeView = Backbone.View.extend({
    render: function(prizes){
	
	var template = _.template(prizesList, { prize: prizes });

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

	playerView = new playerView({ el: $("#player_games") });

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