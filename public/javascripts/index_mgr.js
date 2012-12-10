function fb_login(){

    FB.login(function(response) {
    	if (response.authResponse) {
	    // savePlayerNPost(response);
    	}else{
    	    //User cancelled login or did not fully authorize.
    	}
    }, {scope: 'email,user_checkins,publish_stream'});
}

$(document).ready(function() {

    $("#logbut").on('click touchstart', function(e) {
	e.preventDefault(); 
	fb_login();

    });

});