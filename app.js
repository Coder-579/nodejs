var http = require('http')
var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
// var myWriteStram = fs.createWriteStream(__dirname + '/writeme.txt')

// myReadStream.pipe(myWriteStram)


var server = http.createServer(function(req, res){
  // console.log(req,'there was req now you will see res ', res)
  console.log('req was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/htmL'})
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
  myReadStream.pipe(res)
  // res.end('Hey ninjas!!!')
})

server.listen(3000, '127.0.0.1')

console.log('listening to port 3000')