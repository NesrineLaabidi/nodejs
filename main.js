var fs = require("fs")


fs.writeFile('welcome.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('File created successfully!');
  });

  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });