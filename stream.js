const fs = require('fs');

const rs = fs.createReadStream('./texts/text4.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./texts/text5.txt');

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// })

rs.pipe(ws)