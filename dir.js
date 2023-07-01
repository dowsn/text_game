const fs = require('fs');

if(!fs.existsSync('./new')){ // otherwise it would just overwrite the thing
  fs.mkdir('./new', (err)=> {
    if(err) throw err;
    console.log('Directory created');
  })

} else {
    fs.rmdir('./new', (err) => {
      if (err) throw err;
      console.log('Directory removed');
    });
}