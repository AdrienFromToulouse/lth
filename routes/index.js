
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
  res.render('dashboard', { title: 'Dashboard Treasure Hunt' });
};