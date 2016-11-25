/* This js file is for testing socket.io client
 - It emits by interval to socket.io server
 - It use node to read data in .json file
 - to run it:  $ node testClientFile.js
*/

var fs = require("fs");

/*
console.log("*connect to socket.server ...* \n");
var io = require("./node_modules/socket.io-client");
var socket = io.connect("http://172.16.54.10:8085");

// Every interval (2 seconds) to run emitData() with tick function setInterval()
var interval = 2000;
var dataSwitch = true;
var dummyVar = setInterval( function() { emitData()}, interval);

function emitData() {
    var message;
    var dContents, gContents;
    var dJSON, dJSON1, dJSON2, gJSON;

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
    socket.emit('source-client emit log', gJSON);

};
*/

var dataRead, dataParsed;

/*
dataRead   = fs.readFileSync("testLogT1.txt");
dataParsed = JSON.parse(dataRead);

console.log('T1.txt');
console.log('data read: ' + dataRead );
console.log('data parsed whole: ' + dataParsed );
console.log('data parsed GEP18: ' + dataParsed.GEP_18 );
console.log('data parsed GEP18-ID: ' + dataParsed.GEP_18.stationID );
*/

dataRead   = fs.readFileSync("testLogT2.txt");

var validation = require("./testClientValidation");

if ( validation.isJSON(dataRead) ) {
    console.log( validation.isJSON(dataRead));
    dataParsed = validation.getMessage(dataRead);
} else {
    dataParsed = '{ "ERROR": "Not a JSON object." }';
};

console.log( dataParsed );

