/**
 * Include
 */
var mongoose = require('mongoose');


var types = 'nfc qrcode'.split(' ');

var tags  = new mongoose.Schema({

    type: { type: String, enum: types },
    location: String,
    code: String
});



/**
 * Exports the schema to be used by client module.
 *
 */
exports.getTagsSchema = function(){
    return tags;
}