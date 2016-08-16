var letterCaps = function(str){
str = str.split(" ");
for(var i =0;i<str.length;i++){
	str[i]=str[i][0].toUpperCase() + str[i].substring(1)
}
str = str.join(" ");
return str;

};