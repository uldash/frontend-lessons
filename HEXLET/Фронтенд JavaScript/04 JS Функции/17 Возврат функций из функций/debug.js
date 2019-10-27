const debug = require('debug');

const logHttp = debug('http');
const logHandler = debug('handler');

logHttp('hello!');
logHttp('i am from http');

logHandler('hello from handler!');
logHandler('i am from handler');