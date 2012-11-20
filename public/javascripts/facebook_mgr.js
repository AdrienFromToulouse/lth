function savePlayer(response){

    FB.api('/me', function(response) {
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
	$('#welcome').append("<p>Welcome to Treasure Hunt "+response.name+"</p>");

	player = JSON.stringify(player);

	$.ajax({
    	    url: "/login",
    	    type: "POST",
    	    dataType: "json",
    	    data: player,
    	    contentType: "application/json",
    	    cache: false,
    	    timeout: 5000,
    	    complete: function() {
    	    },
    	    success: function(data) {
    	    },
    	    error: function() {
    	    },
	});
    });
}

function resetPlayer(){

    var player = {
    	"fb_id": "",
    	"name": "_Player",
    	"gender": "",
    	"first_name": "",
    	"last_name": "",
    	"locale": "",
    	"link": "",
    	"picture": "",
    	"email": "",
    };

    player = JSON.stringify(player);

    $.ajax({
    	url: "/login",
    	type: "POST",
    	dataType: "json",
    	data: player,
    	contentType: "application/json",
    	cache: false,
    	timeout: 5000,
    	complete: function() {
    	},
    	success: function(data) {
    	},
    	error: function() {
    	},
    });
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


	    savePlayer(response);
	    
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

