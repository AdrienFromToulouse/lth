var playersList = "\
<tr>\
<th>Firstname</th>\
<th>Lastname</th>\
<th>Address</th>\
<th>Phone</th>\
</tr>\
<tr>\
<% _.each(player, function(item, key, list){ %>\
<% var cls = list[key].address; %>\
<td class='<%= cls %>'><%= list[key].firstname %></td>\
<td class='<%= cls %>'><%= list[key].lastname %></td>\
<td class='<%= cls %>'><%= list[key].address %></td>\
<td class='<%= cls %>'><%= list[key].phone %></td>\
<td>\
<form method= 'post' class='sendform' id='send-<%= list[key]._id %>' action=''>\
<td>\
\
<form  id='prizeform' class='hidden editprize' data-userid='<%= list[key]._id %>' method='post' action=''>\
\
<select id='prize' name='prize'></select>\
\
<input type='hidden' id='scoreid' name='scoreid' value='<%= list[key].phone %>;<%= list[key].address %>'/>\
<input type='submit' name='submit' value='Give prize'/>\
</form>\
\
\
</td>\
</tr>\
<% }); %>";