var fs = require('fs');

//delete file
// fs.unlink('writeme.txT')

//creating directory synchronus
// fs.mkdirSync('stuff')
//Delete directory
// fs.rmdirSync('stuff')
//Asynchronus method to delete directory
// fs.mkdir('stuff', function(){
//   fs.readFile('readme.txt', 'utf8', function( err, data){
//     fs.writeFile('./stuff/writeME.txt', data);
//   })
// })

//Remove file then remove's the directory
// fs.unlink('./stuff/writeme.txt',function(){
//   fs.rmdir('stuff')
// })
// fs.rmdir('stuff')
