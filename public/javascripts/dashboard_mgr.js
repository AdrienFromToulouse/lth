// We extend the Backbone.Model prototype to build our own
var Player = Backbone.Model.extend({
    
    // default values.
    // defaults : {
    //   name : null,
    //   sparkles : false,
    //   cream_filled : false
    // },
    idAttribute: "_id",    
    url : function() {
	// In this case, POST to '/players' and PUT to '/playerss/:id'
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
    firstname : "Boston Doan Yes"},{
    error: function(){ console.log("ERROR"); } ,
    success: function(){  console.log(player_p.get("firstname"));
			  console.log(player_p.id);

			  player_p.save({
			      firstname : "Boston Doee"},{
				  error: function(){ console.log("ERROR"); } ,
				  success: function(){  console.log(player_p.get("firstname"));
							console.log(player_p.id);
						     }
			      });

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
    
//     template: _.template($('#document-row-template').html()),

//     initialize: function() {
// 	_.bindAll(this, 'render');
//     },
//     render: function() {
// 	$(this.el).html(this.template({
// 	    p_id: this.model.id,
// 	    p_title: this.model.get('firstname')
// 	}));
// 	return this;
//     }
// });


// var PView = new PlayerView({
//     model : playerModel
// });

// var renderedDonutElement = PView.render().el;

var PlayerView = Backbone.View.extend({
    initialize: function(){
        console.log("[INFO]: Init Backbone View");
    },

    events: {
        "click #search_container": "do"
    },

    do: function( event ){
    	console.log("RIGHT!!!!!!!!!!!!!!");
    }
});

var player_view = new PlayerView({ el: $("#search_container") });


// var TestView = Back\bone.View.extend({
  
//   initialize: function() {
//     this.template = jade.compile($("#test").text());
//   },
  
//   render: function() {
//     var html = this.template({ item: 'hello, world'});
//     $('body').append(html);
//   }
// });

// var test = new TestView();
// test.render();