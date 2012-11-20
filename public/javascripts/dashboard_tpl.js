// var search_template = ' \
// <p><%= game %></p> \
// <p><%= prize %></p> \';


//var list = "<p><%= game %></p>";

var list = "<% _.each(game, function(name) { %> <p><%= name %></p> <% }); %>";

var prizesList = "<% _.each(prize, function(name) { %> <p><%= name %></p> <% }); %>";
