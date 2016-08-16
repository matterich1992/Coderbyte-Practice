//First Reverse - print str in reverse

var reverseString = function(string){

	var reversed = [];

for(var i = string.length-1;i>=0;i--){
	reversed+=string[i];
}
return reversed;
};