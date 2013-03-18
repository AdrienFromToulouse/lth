// var layout = [
// 	{ cells: [
// 	    [
// 		{ field: "firstname", name: "ID", width: "300px"},
// 		{ field: "games",
// 		  children: [
// 		      { field: "score", name: "Score" },
// 		      { field: "collectedCodes",
// 			children: [
// 			    { field: "code", name: "Code", width: "300px" },
// 			],
// 			aggregate: "cnt",
// 		      }
// 		  ],
// 		  aggregate: "cnt",
// 		  //itemAggregates: [ "code" ]
// 		}	    
// 	    ]
// 	]}
// ];



require(['dojo/_base/lang','dojox/grid/TreeGrid',
	 'dojox/grid/DataGrid', 
	 'dojo/data/ObjectStore',
	 'dojo/data/ItemFileWriteStore', 
	 'dojo/store/JsonRest',
	 'dojo/dom', 
	 'dijit/form/ComboBox',
	 'dojo/domReady!'],

	function(lang, DataGrid, ItemFileWriteStore, dom){

	    var store = new dojo.store.JsonRest({target:"/players/"}),
	    dataStore = dojo.data.ObjectStore({objectStore: store});


	    var layout =  [[

		{    name: "Name", fields: ["firstname", "lastname"], width: "10%",
		     formatter: function(fields){
			 var first = fields[0],
			 last = fields[1];
			 
			 return last + ", " + first;
		     },
		     editable: true, 
		},
		{
		    name: "#Tags Game1", width: "8%",
		    get: function(rowIndex, item){
			
			if(!item){ return; }

			// |this| is the cell object
			var store = this.grid.store,
			tags = item.games[0].collectedCodes.length;
			return tags;
		    },
		    formatter: function(slugging){
			return slugging;
		    },
		    editable: true, 

		},
		{
		    name: "#Tags Game2", width: "8%",
		    get: function(rowIndex, item){
			
			if(!item){ return; }
			var store = this.grid.store,
			tags = item.games[0].collectedCodes.length;
			return tags;
		    },
		    formatter: function(slugging){
			return slugging;
		    }
		},
		{
		    name: "#Tags Game3", width: "8%",
		    get: function(rowIndex, item){
			
			if(!item){ return; }
			var store = this.grid.store,
			tags = item.games[0].collectedCodes.length;
			return tags;
		    },
		    formatter: function(slugging){
			return slugging;
		    }
		},
		{
		    name: "Score Game1", width: "8%",
		    get: function(rowIndex, item){
			
			if(!item){ return; }
			var store = this.grid.store,
			tags = item.games[0].score;
			return tags;
		    },
		    formatter: function(slugging){
			return slugging;
		    }
		},
		{
		    name: "Score Game2", width: "8%",
		    get: function(rowIndex, item){
			
			if(!item){ return; }
			var store = this.grid.store,
			tags = item.games[1].score;
			return tags;
		    },
		    formatter: function(slugging){
			return slugging;
		    }
		},
		{
		    name: "Score Game3", width: "8%",
		    get: function(rowIndex, item){
			
			if(!item){ return; }
			var store = this.grid.store,
			tags = item.games[2].score;
			return tags;
		    },
		    formatter: function(slugging){
			return slugging;
		    }
		},
                { name: "Email", field: "email", width: "10%",  editable: true },
                { name: "Phone", field: "phone", width: "auto" },
            ]];

	    var onSave = function(){
		alert("Save done.");
	    }
	    var onSaveError = function(error){
		alert("Error occurred: " + error)
	    }
	    var grid = new dojox.grid.DataGrid({
		id: 'grid',
		//autoHeight: true,
		//autoWidth: true,

		// onRowDblClick: function(e){//dataStore.close();
		//     //dataStore.fetch();
		//     dataStore.put({firstname: "tt"});},
		store:  dataStore,
		structure: layout,
		rowSelector: '10px'});

	    /*append the new grid to the div*/
	    grid.placeAt("gridDiv");

	    /*Call startup() to render the grid*/
	    grid.startup();
	});










// ///////////////////////////////////////// KENDO //////////////////////////////////////////////////////




// // $(document).ready(function() {
// //     $("#gridDiv").kendoGrid({
// //         dataSource: {
// //             type: "json",
// //             transport: {
// //                 read: "http://lth.lacoste.asiance-dev.com/players/"
// //             },
// //             pageSize: 7,
// // 	    // group: {
// //             //     field: "games", aggregates: [
// //             //         { field: "score", aggregate: "count" },
// //             //     ]
// //             // },

// //             // aggregate: [ { field: "score", aggregate: "count" }]
// //         },

// // 	dataBound: function() {
// //             this.expandRow(this.tbody.find("tr.k-master-row").first());
// //         },
// // 	detailInit: detailInit,
// //         sortable: true,
// //         scrollable: false,
// //         pageable: true,
// //         columns: [
// //             { field: "firstname", title: "Games" },
// //             { field: "lastname", title: "Sent" },
// //             { field: "_id"},
// //             { field: "email"},
// //         ]
// //     });




// //     function detailInit(e) {
// //         $("<div/>").appendTo(e.detailCell).kendoGrid({
// //             dataSource: {
// //                 type: "json",
// //                 transport: {
// //                     read: "http://lth.lacoste.asiance-dev.com/players/"
// //                 },
// //                 //serverPaging: true,
// //                 //serverSorting: true,
// //                 //serverFiltering: true,
// //                 pageSize:6,
// // 		filter: { field: "_id", operator: "eq", value: e.data._id }
// //             },
// //             scrollable: false,
// //             sortable: true,
// //             pageable: true,
// //             columns: [
// //                 { field: "prizes", title: "Prize", width: 70 },
// //                 // { field: "prizes[1].name", title: "Prize", width: 70 },
// //                 // { field: "prizes[2].name", title: "Prize", width: 70 },
// //                 // { field: "prizes[0].sent", title: "Sent ", width: 70, "template": "<input type=\"checkbox\" />"},
// //             ]
// //         });
// //     }
// // });
