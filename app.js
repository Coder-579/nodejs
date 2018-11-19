var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')
var myWriteStram = fs.createWriteStream(__dirname + '/writeme.txt')

myReadStream.on('data', function(chunk){
  console.log('new chunk: ')
  myWriteStram.write(chunk)
})