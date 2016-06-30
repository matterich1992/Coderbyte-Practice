//sumNums - sum of the numbers oumf a num input as argument
//Ex: sumNums(5) // 1+2+3+4+5 == 15;

var sumNums = function(num){
	var total = 0;
	for(var i =0;i<=num;i++){
	total+=i;
	}
return total;

};

sumNums(5);