// describe("Player Update", function() {

//     describe('Save an already scanned tag', function() {

// 	/**/
//         beforeEach(function() {
//     	    this.server = sinon.fakeServer.create();
//         });



// 	it("should says something like: you already have it", function() {

// 	    var spy = sinon.spy(jQuery, 'ajax');

// 	    expect(spy.calledOnce);
// 	    expect(spy.getCall(0).args[0].url)
// 		.toEqual("/player/");

// 	    expect(spy.getCall(0).args[0].dataType).toEqual("json");

// 	    jQuery.ajax.restore();
// 	});



// 	describe('#save - fake server', function() {
//             beforeEach(function() {
//     		this.server = sinon.fakeServer.create();
//             });

//             afterEach(function() {
//     		this.server.restore();
//             });

// 	    var me = new MeAsPlayerModel();

//             it('sends valid data to the server', function() {

// 		me.save({
// 		    firstname : "Boston Uptest"},{
// 		    	error: function(){ console.log("ERROR"); } ,
// 		    	success: function(){  console.log(me.get("firstname"));
// 		    			      console.log(me.id);
// 		    			   }
// 		    });


//     		var request = this.server.requests[0];

//     		var params = JSON.parse(request.requestBody);

//     		// expect(params.task).toBeDefined();
//     		expect(params.firstname).toEqual('Boston Uptest');
//     		// expect(params.task.complete).toBeFalsy();
//             });
//     	});
//     });

// });