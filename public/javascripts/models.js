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
    url : "/players"
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
