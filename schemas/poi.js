/**
 * Include
 */
var mongoose = require('mongoose');


/**
 * Define the schema
 */
function createSchema(){

    var poiSchema = new mongoose.Schema({

	id: String,
	footnote: String,
	title: String,
	lat: String,
	lon: String,
	imageURL: String,
	description: String,
	biwStyle: Number,
	alt: Number,
	doNotIndex: Number,
	showSmallBiw: Number,
	showBiwOnClick: Number,
	poiType: Number,
	layerID:  Number,
    });
    return poiSchema;
}


exports.getSchema = function(){

    return createSchema();
};


exports.createNewPOI = function(){
    
    var poiSchema = createSchema();

    db = mongoose.createConnection('localhost', 'treasureHunt');

    var Poi = db.model('Poi', poiSchema);

    var newpoi = new Poi;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {


	newpoi.id= "geo_1",
	newpoi.footnote= "Powered by Asiance",
	newpoi.title= "The Asiance Office",
	newpoi.lat = 37.567031,
	newpoi.lon = 126.972164,
	newpoi.imageURL= "http:/treasurehunt.asiance-dev.com:3110/images/asiance.jpg",
	newpoi.description= "The location of Asiance office",
	newpoi.biwStyle= "",
	newpoi.alt= "",
	newpoi.doNotIndex= "",
	newpoi.showSmallBiw= "",
	newpoi.showBiwOnClick= "",
	newpoi.poiType= "",
	newpoi.layerID=  "",

	newpoi.save(function (err) {
    	    if(err){//console.log('ERROR');
	    }
	    else{
	    }//end of else
	});
    });
};

// exports.getCurrentPOI = function(bayeux){
    
//     var poiSchema = createSchema();
 
//     db = mongoose.createConnection('localhost', 'treasureHunt');

//     var Poi = db.model('Poi', gameSchema);

//     db.on('error', console.error.bind(console, 'connection error:'));

//     db.once('open', function () {

//    	var query = Poi.find().limit(1);

// 	query.exec(function (err, poi) {
// 	    if (err) { throw err; }

// 	    var tt ={ cmd: 'start',
// 		      change_team1: 0,
// 		      change_team2: 0,
// 		      score: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
// 		      gamelle: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
// 		      cendrier: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
// 		      pissette: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
// 		      reprise: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
// 		      player:
// 		      [ { imageP1: '',
// 			  firstnameP1: '' },
// 			{ imageP2: '',
// 			  firstnameP2: '' },
// 			{ imageP3: '',
// 			  firstnameP3: '' },
// 			{ imageP4: '',
// 			  firstnameP4: '' } ] };

	    
// 	});
//     });
// };