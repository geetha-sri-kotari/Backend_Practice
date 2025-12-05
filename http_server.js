import http from 'http';
const http_server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.url == "/users") {
        res.writeHead(200, {"content-type" : "application/json"});
        res.end(JSON.stringify({
            user1 : "Geetha Sri",
            user2 : "Krish",
            user3 : "Suneetha"
        }));
    }
    else {
        res.writeHead(200, {"content-type" : "text/plain"});
        res.end("Hello! This is Backend from http server");
    }
});
http_server.listen(7007, ()=>{
    console.log(`Server running at port number ${7007}`);
});