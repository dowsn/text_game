const path = require('path');
const express = require('express');

const requireDir = require('require-dir');
const { add } = require(path.join(__dirname, 'math.js')); // destructuring
const fsPromises = require('fs').promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'texts', 'text.txt'), 'utf8');
    console.log(data)
    await fsPromises.unlink(
      path.join(__dirname, 'texts', 'text.txt'),
    );
    await fsPromises.writeFile(
      path.join(__dirname, 'texts', 'text3.txt'),
      data,
    );
    await fsPromises.appendFile(
      path.join(__dirname, 'texts', 'text3.txt'),
      '\n\nnice to meet you',
    );
    await fsPromises.rename(
      path.join(__dirname, 'texts', 'text3.txt'),
      path.join(__dirname, 'texts', 'text4.txt'),
    );
  } catch(err) {
    console.error(err);
  }
}

fileOps();

const { error } = require('console');

const math = require('./math'); // not a standard module or node_module so ./ before

// fs.readFile(path.join(__dirname, 'texts', 'text.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); // utf8 options to encode into normal text liket .toString()


// let textToFile = 'nice to meet you';
// fs.writeFile(path.join(__dirname, 'texts', 'text2.txt'), textToFile, (err, data) => {
//   if (err) throw err;
//   console.log('Write complete');

//   // this way appending to file only when I also create it
//     let appendToFile = '\n\n and you are ni tooo';

//     fs.appendFile(
//       path.join(__dirname, 'texts', 'text2.txt'),
//       appendToFile,
//       (err, data) => { // upon finishing otherwise no relation between function
//         if (err) throw err;
//         console.log('Append complete');

//           fs.rename(
//             path.join(__dirname, 'texts', 'text2.txt'),   path.join(__dirname, 'texts', 'text3.txt'),
//             (err, data) => {
//               if (err) throw err;
//               console.log('Renaming complete');
//             },
//           );

//       },
//     );


// });



// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error:' ${err}`);
  process.exit(1);
});

console.log(math.add(1, 2));
console.log(add(1, 2)); // adding after restructuring
console.log(__dirname);
console.log(path.parse(__filename));
console;

const routes = requireDir('./routes');

const app = express();

// //Auto include route files so we don't have to manually keep adding them
// Object.keys(routes).forEach((fileNameKey) => {
//   let cnt = routes[fileNameKey];
//   console.log('New route: ', fileNameKey);
//   app.use('/' + fileNameKey, cnt);
// });
