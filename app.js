var fs = require('fs');

// var read = fs.readFileSync('readMe.txt', 'utf8');

// fs.writeFileSync('writeMe.txt', read)

//async
fs.readFile('reaDme.txt', 'utf8', function(err,data){
  fs.writeFile('writeme.txt', data)
})

