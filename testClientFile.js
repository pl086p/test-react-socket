/* This js file is for testing socket.io client
 - It emits by interval to socket.io server
 - It use node to read data in .json file
 - to run it:  $ node testClientFile.js
*/
console.log("*Define JSON file ...*");
var fs = require("fs");
var server = 'localhost';
var socket_port = 8085;


// var dJSON= require("./testData");
console.log("*connect to socket.server ...* \n");
var io = require("./node_modules/socket.io-client");
var socket = io.connect("http://" + server + ":" + socket_port);

// Every interval (2 seconds) to run emitData() with tick function setInterval()
var interval = 2000;
var dataSwitch = true;
var demmyVar = setInterval( function() { emitData()}, interval);

function emitData() {
    var message;
    var dContents, gContents;
    var dJSON, dJSON1, dJSON2, gJSON;
    var timer;

    dataSwitch = !dataSwitch;

    // read (json) data file
    if ( dataSwitch ) {
        dContents = fs.readFileSync("testData1.json");
        gContents = fs.readFileSync("testLog1.json");
    }
    else {
        dContents = fs.readFileSync("testData2.json");
        gContents = fs.readFileSync("testLog2.json");
    };

    // parse it to JSON object, emit it to socket server
    dJSON = JSON.parse(dContents);
    socket.emit('source-client emit data', dJSON);

    gJSON = JSON.parse(gContents);
    // timer = new Date();
    // console.log(timer.toLocaleTimeString() + '   ' + gJSON.GEP_23.message);
    socket.emit('source-client emit log', gJSON);

};
