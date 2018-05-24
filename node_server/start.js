console.log("node js work!");

var json_ar =[
    {
        image:"pic1.jpg",
        name:"koko cake",
        cal:500,
        price:40

    },
    {
        image:"pic4.jpg",
        name:"mango cake",
        cal:500,
        price:40

    },
    {
        image:"pic1.jpg",
        name:"apple cake",
        cal:500,
        price:40

    }
]

var http = require('http');

http.createServer(function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.writeHead(200, {'Content-Type': 'text/html'});
    var jsonSting = JSON.stringify(json_ar);

    setTimeout(function(){
        res.write(jsonSting);
        res.end();
    },4000)

}).listen(3000);