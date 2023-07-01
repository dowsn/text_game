const logEvents = require('./date');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  myEmitter.emit('log', 'Log event emitted!');
},)