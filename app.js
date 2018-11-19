var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
  // console.log(req,'there was req now you will see res ', res)
  console.log('reques was made ' + req.url)
  if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/index.html').pipe(res)
  } else if ( req.url === '/contact-us'){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/contact.html').pipe(res)
  } else if (req.url === '/api/ninjas') {
    var ninjas = [{name:'base', age: 78}, {name: 'An', age: 89}]
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(ninjas))
  } else {
    res.writeHead(404, {'Content-Type' : 'text/html'})
    fs.createReadStream(__dirname + '/404.html').pipe(res)
  }
})

server.listen(3000, '127.0.0.1')

console.log('listening to port 3000')