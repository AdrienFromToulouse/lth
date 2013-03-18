#!/bin/sh
#This script initializes the LTH DB with the data of each player.


# Rm the previous ones
mongo asiance_LTH --eval 'db.prizes.remove({})'

# Init
mongo asiance_LTH --eval 'db.prizes.save({

    name: "prize1",
    quantity: "142",
    game: "1"

})'

mongo asiance_LTH --eval 'db.prizes.save({

    name: "prize2",
    quantity: "14",
    game: "2"

})'