//alphabetSoup take letters or words and alphabetize

var alph = function(str){
str = str.split(" ");	// sacing in quotes will determine letters or words
str =str.sort(" ");
str =str.joi(" ");

return str;

};