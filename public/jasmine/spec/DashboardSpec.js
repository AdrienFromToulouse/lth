describe("Dashboard", function() {

    describe('MeAsPlayerModel', function() {
	it('should be defined', function() {
            expect(MeAsPlayerModel).toBeDefined();
	});

	it('can be instantiated', function() {
            var me = new MeAsPlayerModel();
            expect(me).not.toBeNull();
	});



	it("should be abble to fetch current player data (mine)", function() {

	    var spy = sinon.spy(jQuery, 'ajax');
	    var me = new MeAsPlayerModel;

	    me.fetch();

	    expect(spy.calledOnce);
	    expect(spy.getCall(0).args[0].url)
		.toEqual("/player/");

	    expect(spy.getCall(0).args[0].dataType).toEqual("json");

	    jQuery.ajax.restore();
	});



	describe('#save - fake server', function() {
            beforeEach(function() {
    		this.server = sinon.fakeServer.create();
            });

            afterEach(function() {
    		this.server.restore();
            });

	    var me = new MeAsPlayerModel();

            it('sends valid data to the server', function() {

		me.save({
		    firstname : "Boston Uptest"},{
		    	error: function(){ console.log("ERROR"); } ,
		    	success: function(){  console.log(me.get("firstname"));
		    			      console.log(me.id);
		    			   }
		    });


    		var request = this.server.requests[0];

    		var params = JSON.parse(request.requestBody);

    		// expect(params.task).toBeDefined();
    		expect(params.firstname).toEqual('Boston Uptest');
    		// expect(params.task.complete).toBeFalsy();
            });
    	});
    });

    describe('PlayerModel', function() {

	it('should be defined', function() {
            expect(PlayerModel).toBeDefined();
	});

	it('can be instantiated', function() {
            var player = new PlayerModel();
            expect(player).not.toBeNull();
	});


	it("can be saved to database - real server", function() {

	    var eventSpy = sinon.spy();

    	    var me = new PlayerModel;

	    me.bind("change", eventSpy);
	    me.save({"firstname": "test"},{
		error: function(){ console.log("ERROR"); } ,
		success: function(){  //console.log(me.get("firstname"));
		    		     // console.log(me.id);
		    		   }
	    });

	    expect(eventSpy.calledOnce).toBeTruthy();
	    expect(eventSpy.args[0][1].changes.firstname).toBeTruthy();
	});

    });


    describe('Player collection', function() {

	it("should be abble to fetch all players data", function() {

	    var spy = sinon.spy(jQuery, 'ajax');
	    var players = new PlayersCollection;
	    
	    players.fetch();

	    expect(spy.calledOnce);
	    expect(spy.getCall(0).args[0].url)
		.toEqual("/players");

	    expect(spy.getCall(0).args[0].dataType).toEqual("json");

	    jQuery.ajax.restore();
	});

    });

});