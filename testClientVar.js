/* This js file is for testing socket.io client
 - It emits by interval to socket.io server
 - It reads data in Var
 - to run it:  $ node testClientFile.js
 */

var dJSON1= {
    'time': '2016-11-15 08:23:34',
    'B_GEP_34_8': {
        'C_LP_T1_01': 8001001,
        'C_LP_T2_01': false,
        'C_LP_T2_02': true,
        'C_RP_T2_11': 8003001,
        'C_RP_T3_01': 8004001
    },
    'B_GEP_34_4': {
        'C_LP_T1_01': 4001001,
        'C_LP_T2_01': true,
        'C_LP_T2_02': false,
        'C_RP_T2_11': 4003001,
        'C_RP_T3_01': 4004001
    }
};


var dJSON2= {
    'time': '2016-11-15 08:23:36',
    'B_GEP_34_8': {
        'C_LP_T1_01': 80010011111,
        'C_LP_T2_01': true,
        'C_LP_T2_02': false,
        'C_RP_T2_11': 80030011111,
        'C_RP_T3_01': 8004001
    },
    'B_GEP_34_4': {
        'C_LP_T1_01': 40010011111,
        'C_LP_T2_01': false,
        'C_LP_T2_02': true,
        'C_RP_T2_11': 40030011111,
        'C_RP_T3_01': 40040011111
    }
};

var dJSON;

// var dJSON= require("./testData");
var io = require("./node_modules/socket.io-client");
var socket = io.connect("http://localhost:8085");

// Every interval (2 seconds) to run emitData()
var interval = 2000;
var dataSwitch = true;
var demmyVar = setInterval( function() { emitData()}, interval);

function emitData() {
    var message;

    dataSwitch = !dataSwitch;

    if ( dataSwitch ) {
        dJSON = dJSON1.B_GEP_34_8;
        message = 'emit dJSON-1: ';
    }
    else {
        dJSON = dJSON2.B_GEP_34_4;
        message = 'emit dJSON-2: ';
    };

    console.log(message + dJSON.C_LP_T1_01 + ',   ' + dJSON.C_RP_T3_01);
    socket.emit('when any client emit', dJSON);

};
