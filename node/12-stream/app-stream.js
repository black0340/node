const fs = require('fs');

const readstream = fs.createReadStream('./file.txt', {
    //highWaterMark: 8, // 64 kbytes
    //encoding: 'utf-8',
});

const data = [];

readstream.once('data', (chunk) => {
    //console.log(chunk);
    data.push(chunk);
    console.count('data');
})

readstream.on('error', error => {
    console.log(error);
})

readstream.on('end', () => {
    console.log(data.join(''));
})