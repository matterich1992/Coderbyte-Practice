//Bonfire FCC
//EASY

// 1. Reverse a String

var reverseString = function(str){
	var reversed = "";
	for(var i = str.length-1;i>=0;i--){
	reversed+=str[i];
	}
return reversed;
};

reverseString("Hello my name is Matt");

// 2. Factorialize

var factorialize = function(num){
if(num===0){

  return 1;

  }else{
    for(var i = num-1;i>0;i--){
		num*=i;
	}
  }
return num;
};

factorialize(5);

// 3.  Palindrome with included regEx replace

function palindrome(str) {
  // Good luck!
  str=str.replace(/[\W_]/g, '').toLowerCase();
  
  if(str.split('').reverse().join('')===str){
    return true;
  }
 return false;
}

//4. Longest Word in string


function findLongestWord(str) {
str =str.split(' ');
  var longestLength = 0;
  for(var i=0;i<str.length;i++){
    if(str[i].length>longestLength){
      longestLength=str[i].length;
    }
  }
 return longestLength; 
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// 5. titleCase makes first letter uppercase of each word and Lowercases the rest
function titleCase(str){
  str = str.toLowerCase().split(' ');
  for(var i=0; i<str.length;i++){
    str[i]=str[i][0].toUpperCase()+str[i].substring(1);
  }
  str = str.join(" ");
  return str;
}

titleCase("I'm a little tea pot");



