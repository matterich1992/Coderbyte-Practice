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

// 6. Return the largest number in group of arrays?

function largestOfFour (arr){
	var results = [];
	for(var i =0;i<arr.length;i++){
		var largestNum=0;
		
		for(var j=0;j<arr[i].length;j++){
			if(arr[i][j]>largestNum){
				largestNum= arr[i][j];
			}
		}
		results[i]= largestNum; //results.push(largestNum);
	}
	return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 7. Confirm the Ending
 function confirmEnd (str, target){
  if(str.substr(-target.length)===target){
    return true;
  } else {
    return false;
  }
 };

 confirmEnd('Bastian', 'n');


 //8. repeat a String

 function repeat (str, num){
var repeated = '';

while(num>0){
  repeated+=str + ' ';
  num--
}
return repeated;
 };

 repeat("Hello", 3);

 //alternate way for repeat a string

 function repeatstr(str,num){
var results = '';
for(var i =1;i<=num;i++){
  results+=str + ' ';
}
return results;
}

repeatstr("Hello", 3);
