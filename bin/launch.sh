#!/bin/sh

# ls

# nodemon --watch ../views --watch ../routes --watch ../public --watch ../app.js ../app.js

forever app.js > output.log &
