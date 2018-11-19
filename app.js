var http = require('http')
var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
// var myWriteStram = fs.createWriteStream(__dirname + '/writeme.txt')

// myReadStream.pipe(myWriteStram)


var server = http.createServer(function(req, res){
  // console.log(req,'there was req now you will see res ', res)
  console.log('req was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'application/json'})
  var myObj = {
    name: 'Ryan',
    job: 'Ninja',
    age: 590
  }
  res.end(JSON.stringify(myObj))
  // res.end('Hey ninjas!!!')
})

server.listen(3000, '127.0.0.1')

console.log('listening to port 3000')