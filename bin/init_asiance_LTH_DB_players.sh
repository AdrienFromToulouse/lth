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
    facebook_id: "1588776452",
    picture: "",

    games: [{score: 1984,
             collectedCodes: [{code: "7a38dOc212e97c15a584f910e96"},
                              {code: "8a38dOc313e97c15a584f910e96"}]
            },
            {score: 1985,
             collectedCodes: [{code: "7a38dOc212e97c15a584f910e96"},
                              {code: "8a38dOc313e97c15a584f910e96"}]
            },
            {score: 1986,
             collectedCodes: [{code: "7a38dOc212e97c15a584f910e96"},
                              {code: "8a38dOc313e97c15a584f910e96"}]
            }],

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
    facebook_id: "124578",
    picture: "",


    games: [{score: 1989,
             collectedCodes: [{code: "7a38dOc212e97c15a584f910e96"},
                              {code: "8a38dOc313e97c15a584f910e96"}]
            },
            {score: 1990,
             collectedCodes: [{code: "7a38dOc212e97c15a584f910e96"},
                              {code: "8a38dOc313e97c15a584f910e96"}]
            },
            {score: 1991,
             collectedCodes: [{code: "7a38dOc212e97c15a584f910e96"},
                              {code: "8a38dOc313e97c15a584f910e96"}]
            }],

    prizes: [{name: "prize12",
              sent: true},
             {name: "prize22",
              sent: false}]

})'