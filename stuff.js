var counter = function(arr){
  return "There are " + arr.length + " element in this array"
}

var adder = (a,b) => {
  return `the sum of 2 number ${a+b}`
}

var pi = 3.1416;

// module.exports.counter = counter
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}