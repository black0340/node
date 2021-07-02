const EventEmitter = require('events');
const emiiter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
}

emiiter.on('sungwoo', callback1)

emiiter.on('sungwoo', (args) => {
    console.log('second callback - ', args);
})

emiiter.emit('sungwoo', { message: 1 });
emiiter.emit('sungwoo', { message: 2 });
emiiter.removeAllListeners('sungwoo', callback1);
emiiter.emit('sungwoo', { message: 3 });