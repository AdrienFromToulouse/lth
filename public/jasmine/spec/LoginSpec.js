describe("Login", function() {

    describe('#save', function() {

	var facebook_logged;
	var player;

	beforeEach(function() {

	    jQuery.ajax({
		url: "/players",
		type: "DELETE",
		success: function (data, textStatus, jqXHR) {
		    console.log("Post resposne:");
		    console.dir(data);
		    console.log(textStatus);
		    console.dir(jqXHR);
		}
	    });

	    // PlayersCollection = new PlayersCollection;
	    // PlayersCollection.remove();

	    facebook_logged = 0;

	    player = {
    	    	"fb_id": "123",
    	    	"name": "testLogin",
    	    	"gender": "male",
    	    	"first_name": "",
    	    	"last_name": "",
    	    	"locale": "",
    	    	"link": "",
    	    	"picture": "",
    	    	"email": "testLoginMail"
	    };
	});

	it('new player should be saved if he never signed up', function() {

	    var spy = sinon.spy(jQuery, 'ajax');
	    var eventSpy = sinon.spy();

	    Player = new PlayerModel;

	    Player.bind("change", eventSpy);

	    Player.save(player,{
	    	error: function(){ console.log("ERROR"); } ,
	    	success: function(){ console.log("SUCCESS"); }
	    });

	    expect(spy.calledOnce);
	    expect(spy.getCall(0).args[0].url)
		.toEqual("/players");

	    expect(spy.getCall(0).args[0].dataType).toEqual("json");

	    jQuery.ajax.restore();

	    expect(eventSpy.calledOnce).toBeTruthy();
	    expect(eventSpy.args[0][1].changes.name).toBeTruthy();


	    console.log(spy.returnValues);

	    var me = new MeAsPlayerModel;
	});
    });
    describe('#player already in database', function() {

    });
});