let http = require("http");
let port = 3000;

// use this lib sample  developed  https://github.com/aditya-sridhar/simple-rest-apis-nodejs-without-frameworks/
// without using any frame work 
// with simple chunck 


// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    // Send the response body as "Hello World"
//    response.write('Hello World!');
//    // End the response
//    response.end();
// }).listen(port);


const Server = http.createServer((req,res)=>{

   console.log(req.url)
   if( req.url == "/test"){
         res.write("ass working");

   }else{
      res.write("dum ass  its not working ");
   }
});

Server.listen(port)



// Console will print the message
console.log('Server running at http://127.0.0.1:'+ port +'/');