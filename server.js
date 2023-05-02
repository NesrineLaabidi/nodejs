var http = require("http");
var fs = require("fs")


http.createServer(function (request, response) {
   
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('<h1>hello world!!!!</h1>\n');
 }).listen(3000);

    console.log('Server running at http://localhost:3000');

    
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });



