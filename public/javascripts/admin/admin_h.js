/**
 * Defines the Players view.
 *
 */
var playersListView = Backbone.View.extend({
    render: function(players){
	
	var template = _.template(playersList, { player: players });

        this.$el.html( template );
    },
});


/**
 * Defines the main admin dashboard object.
 * 
 */
var lth_admin = {

    init: function(){

	var players = new PlayersCollection;

	playersListView = new playersListView({ el: $("#players") });

	players.fetch({success: function(){

	    var Theplayers = players.toJSON();
//	    console.log(Theplayers);

	    // var tt = players.pluck("firstname");
	    // console.log(tt);

	    playersListView.render(Theplayers);
  	    
	}}); 
    },
}