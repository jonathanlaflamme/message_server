'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _router = require('./app/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Importing dotenv
_dotenv2.default.config();

var app = (0, _express2.default)();
var server = _http2.default.Server(app);
var io = (0, _socket2.default)(server);

app.get('/test', function (req, res) {
    res.send('hello');
});

app.use(_router2.default);

server.listen(process.env.APP_PORT, function () {
    console.log('Listening on port ' + process.env.APP_PORT);
});