#!/bin/sh
#This script initializes the LTH DB with the data of each player.


# Rm the previous ones
mongo asiance_LTH --eval 'db.players.remove({})'

# Init
mongo asiance_LTH --eval 'db.players.save({

    firstname: "PlayerfirstnameX",
    lastname: "PlayerlastnameY",

    gender: "Male",
    country: "CountryX",
    email: "email@asiance.com",

    password: "",
    request_password: "",

    address: "address PlayerX",
    phone: "010-0000-1111",
    facebook_id: "",
    picture: "",

    games: [{name: "game1",
             score: 1984},
            {name: "game2",
             score: 1985},
            {name: "game3",
             score: 1986},
            {name: "game4",
             score: 1987},
            {name: "game5",
             score: 1988}],

    prizes: [{name: "prize1",
              sent: false},
             {name: "prize2",
              sent: true}]

})'


mongo asiance_LTH --eval 'db.players.save({

    firstname: "PlayerfirstnameX2",
    lastname: "PlayerlastnameY2",

    gender: "Female",
    country: "CountryX2",
    email: "email2@asiance.com",

    password: "",
    request_password: "",

    address: "address PlayerX2",
    phone: "010-0000-1111",
    facebook_id: "",
    picture: "",

    games: [{name: "game1",
             score: 1989},
            {name: "game2",
             score: 1990},
            {name: "game3",
             score: 1991},
            {name: "game4",
             score: 1992},
            {name: "game5",
             score: 1993}],

    prizes: [{name: "prize12",
              sent: true},
             {name: "prize22",
              sent: false}]

})'