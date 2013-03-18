//player = require('../schemas/player');



/*
 * GET home page.
 */

exports.index = function(req, res){

    res.render('index', { title: 'Treasure Hunt' });
};



/*
 * GET dashboard page.
 */
exports.dashboard = function(req, res){
  
    res.render('dashboard', { title: 'Dashboard Treasure Hunt' , name: req.session.player_name, fbId: req.session.player_fbId });

};


/*
 * GET admin dashboard page.
 */
exports.admin = function(req, res){

    res.render('admin', { title: 'Admin Dashboard Treasure Hunt' });

};