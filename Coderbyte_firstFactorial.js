//firstFactorial - finds the factorial of a number that is passed as an argument

var firstFactorial = function(num){
	for(var i = num-1; i>1; i--){
	num*=i;
	}
return num;
};

firstFactorial(5);