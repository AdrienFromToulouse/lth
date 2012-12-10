//TODO move this to a dedicate module
var gameCtxt = {gameId: '', type: "", code: ""};

//--

function getURLParameter(name) {
    return decodeURI(
	(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function savePlayer( response, 
		     gameCtxt ){

    FB.api('/me', function(response) {

	PlayerModel = new PlayerModel;

	var player = {
    	    "fb_id": response.id,
    	    "name": response.name,
    	    "gender": response.gender,
    	    "first_name": response.first_name,
    	    "last_name": response.last_name,
    	    "locale": response.locale,
    	    "link": response.link,
    	    "picture": "https://graph.facebook.com/" + response.id + "/picture",
    	    "email": response.email,
	};

	$('#welcome p').remove();
	$('#welcome').append("<p>Welcome to Treasure Hunt "+response.first_name+"</p>");

	PlayerModel.save(player,{
	    error: function(){ console.log("FACE ERROR"); } ,
	    success: function(data){

		/* if the player is already in database the "change" attr of the Backbone model
		 * is not set so the id returned is _id (the one from MongoDB).
		 * Also because of that unset "change" attr, the sync function is override to force 
		 * an update.
		 */
		if( data.attributes[0] ){
		    if( gameCtxt.code != "" ){

			PlayerModel.sync = function(method, model, options) {
			    if (method === "create"){
				model.id = data.attributes[0]._id;
				method = "update";
			    }
			    return Backbone.sync(method, model, options);
			};
	
			PlayerModel.save({gameId: gameCtxt.gameId , code: gameCtxt.code},{
			    error: function(){ console.log("ERROR"); } ,
			    success: function(){ console.log("QRCODE SUCCESS");}
			});
		    }
		}
		else{
		    if( gameCtxt.code != "" ){
		
			PlayerModel.save({gameId: gameCtxt.gameId , code: gameCtxt.code},{
			    error: function(){ console.log("ERROR"); } ,
			    success: function(){ console.log("QRCODE SUCCESS");}
			});
		    }

		}
		console.log("SUCCESS"); }
	});
    });
}


function checkCodeValidity(code){

    $.ajax({
    	url: 'http://lth.lacoste.asiance-dev.com/checkCodeValidity',
    	// data: "city=4",
    	timeout: 5000,
	
	success: function(cities, status){
	}
    });
}


/**
 * In case of the player is not logged on facebook the view is reset.
 *
 */
function resetPlayer(){

    PlayerModel = new PlayerModel;
    PlayerModel.save();
}


window.fbAsyncInit = function() {
    
    FB.init({
	appId      : '382481185169765',
	status     : true, // check login status
	cookie     : true, // enable cookies to allow the server to access the session
	xfbml      : true  // parse XFBML
    });

    /* If the user is already connected */
    FB.Event.subscribe('auth.authResponseChange', function(response) {

    	if(response.status == "connected"){

	    $("#logbut").remove();
	    $('.logbutton').css('left', '218px');
	    $('.logbutton').css('bottom', '271px');

	    $('.logbutton').append("<img id='hf' src='../images/btn_start.png' alt='have_fun'>");

	    $('.dashboard').append("<a href='/dashboard'>Dashboard</a>");

	    gameCtxt.type = getURLParameter("type");
	    gameCtxt.code = getURLParameter("code");
	    gameCtxt.gameId = getURLParameter("gameId"); ;

	    savePlayer(response, gameCtxt);
	    
    	} else if (response.status === 'not_authorized') {
    	    // the user is logged in to Facebook, 
    	    // but has not authenticated my app
    	} else {
    	    // the user isn't logged in to Facebook.
	    resetPlayer();
    	}
    });	
};


// Load the FB SDK Asynchronously
(function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));