//Finds the longest word in a string entered as an argument

var longWord = function(str){
str=str.split(" ");
var longestLength = 0;
for(var i=0;i<str.length;i++){
	if(str[i].length>longestLength){
		longestLength=str[i].length;
		longestWord=str[i];
	}

}
return longestWord;

};