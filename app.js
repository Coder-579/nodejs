//function expression

var sayBye = function(){
  console.log('bye');
}

sayBye();

//Callback function

function callFunction(fun){
  fun();
}

callFunction(sayBye);