//Swap the cases if a letter is capitalized, lower case it. If not uppercase it!
var swapcase = function (str){
var caseSwap = " ";
for(var i = 0;i<str.length;i++){
if(str[i]===str[i].toUpperCase()){
	caseSwap+=str[i].toLowerCase();
}
else if (str[i]===str[i].toLowerCase()){
	caseSwap+=str[i].toUpperCase();
}

}
return caseSwap;

};