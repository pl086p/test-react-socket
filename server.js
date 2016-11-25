// express as socket.io server
const express = require('express');
const app = express();

const server = 'localhost';
const http_port = 3099;
const socket_port = 8085;
const projName = 'projRR45git';

//app.use(express.static(__dirname));
app.use(express.static('path-to-public'));

const http = require('http').createServer(app);
const io = require('socket.io')(http);

connections = [];

io.on('connection', function (socket) {    //io.sockets.on('connection', function (socket) {

    //connected
    //connections.push(socket);
    console.log("One session connected. Current connections: ", connections.length);

    //disconnected
    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('One session disconnected. Remaining connections: ', connections.length);

    });

    // triggered when 'source-client emit data'
    socket.on('source-client emit data', function(dJSON){
        console.log('server.js received source-client emit.');
        // console.log(dJSON.C_LP_T1_01 + '  ' + dJSON.C_LP_T1_02);
        io.emit('server emit data to all', dJSON);   // emit to all clients
    });

    // triggered when 'source-client emit log'
    socket.on('source-client emit log', function(gJSON){
        console.log('server.js received source-client emit.');
        // console.log(dJSON.C_LP_T1_01 + '  ' + dJSON.C_LP_T1_02);
        io.emit('server emit log to all', gJSON);   // emit to all clients
    });
});

http.listen(socket_port, function(){
    console.log('Listening at express as socket server, port: ' + socket_port);
});

// webpack-dev-server as web server
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    proxy: { '*': 'http://' + server + ':' + socket_port },     // socket.io server above
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(http_port, server, function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at ' +  server + ': ' + http_port + ' - ' + projName );

});
