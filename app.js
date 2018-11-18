var events = require('events')
var util = require('util')

var Person = function(name){
  this.name = name
}

util.inherits(Person,events.EventEmitter)

var james = new Person('james')
var saif = new Person('saif')
var sampath = new Person('sampath')

var People = [james,saif,sampath];

People.forEach(function(Person){
  Person.on('speak',function(msg){
      console.log(Person.name + 'said this ' + msg )
  })
})

james.emit('speak','This is james')
saif.emit('speak','OH great nice to meet you Mer. ')
sampath.emit('speak','Thats cool')