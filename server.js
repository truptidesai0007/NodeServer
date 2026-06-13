const http = require("http");
const fs = require("fs");


const server = http.createServer((req,res)=>{


console.log(req.method, req.url);



if(req.url === "/")
{

fs.readFile("index.html",(err,data)=>{


res.writeHead(200,{
"Content-Type":"text/html"
});


res.end(data);


});


}



else if(req.url === "/about")
{


fs.readFile("about.html",(err,data)=>{


res.writeHead(200,{
"Content-Type":"text/html"
});


res.end(data);


});


}



else if(req.url === "/style.css")
{


fs.readFile("style.css",(err,data)=>{


res.writeHead(200,{
"Content-Type":"text/css"
});


res.end(data);


});


}



else
{


res.writeHead(404,{
"Content-Type":"text/html"
});


res.end(`

<h1>404 Page Not Found</h1>

`);


}


});



server.listen(3000,()=>{

console.log(
"Server running at http://localhost:3000"
);

});