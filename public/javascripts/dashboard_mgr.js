// We extend the Backbone.Model prototype to build our own
var Player = Backbone.Model.extend({
    
    // default values.
    // defaults : {
    //   name : null,
    //   sparkles : false,
    //   cream_filled : false
    // },
    
    url : function() {
	// It's got to know where to send its REST calls. 
	// In this case, POST to '/donuts' and PUT to '/donuts/:id'
	//return "http://lth.lacoste.asiance-dev.com/player/:id"; 

	return this.id ? '/players/' + this.id : '/players'; 
    } 
});

playerModel = new Player;

// playerModel.fetch({success: function(){

//     console.log("HERE3");
//     console.log(playerModel);
// }});





// Instantiating
var player_p = new Player({ 
    firstname : "Bostan"
});

// Updating and retrieving attributes
//player_p.set({ firstname : "11112" });

// POST to the RESTful interface.
player_p.save({
    firstname : "Boston"},{
    error: function(){ console.log("ERROR"); } ,
    success: function(){  console.log(player_p.get("firstname"));
		//	  player_p.set({ firstname : "11114" });
			  console.log(player_p.id);
		       }
    });


console.log(player_p);





//----------------COLLECTION--------------------------


// var Players = Backbone.Collection.extend({
//     model : Player,
//     url : "http://lth.lacoste.asiance-dev.com/players"
// });
 
// var players = new Players;
 
// players.fetch({success: function(){

//     var p = players.at(0);
//     console.log(p);  
//     var p = players.at(1);
//     console.log(p);  
   
//     players.each(function(player) {
// 	console.log(player.get("firstname"));
//     });

// }

// }); 




//--------------------VIEW------------



// var PlayerView = Backbone.View.extend({
//     tagName : "div",
//     className : "player",
    
//     render : function() {

// 	this.el.innerHTML = this.model.get('firstname');
	
// 	return this;
//     }
// });


// var PView = new PlayerView({
//     model : playerModel
// });

// var renderedDonutElement = PView.render().el;
