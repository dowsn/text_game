const {format} = require('date-fns');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const {v4: uuid } = require('uuid'); // imports v4 as uuid


const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, 'texts'))) {
       await fsPromises.mkdir(path.join(__dirname, 'texts'));
    }
    fsPromises.appendFile(path.join(__dirname, 'texts', 'logs.txt'), logItem);
  } catch(err) {
    console.log('Error: ' + err);
  }
}

module.exports = logEvents;
