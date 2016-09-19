//String Calculator
// Takes a sentence with the words 'gains' and 'loses' and numbers
// Bob has 4 apples and gains 6--> should return 6

//Input = string
//Output = number

//ex:   "Jerry has 32 apples and loses 6" Note: always have same sentence structure
function calculate (str){
	str = str.split(' ');
	//get first num
	var num1 = parseInt(str[2]);
	//get second num
	var num2 = parseInt(str[6]);
	//get operation if operation loses -- subtract
	var operation = str[5];
	// if operation is gains - add
	if(operation==='loses'){
		return num1-num2;
	
	} else if(operation==='gains'){
		return num1 + num2;
  }
}

console.log(calculate("Bob has 5 apples and gains 6"));

// Add the two smallest values in array (or largest)

function twoSmallestSum (array){
	array.sort(function(a,b){return a-b;})// for largest replace with b-a/ look up compare function for reasoing behind this
	
return array[0]+array[1];
}

twoSmallestSum([34,56,1,23,42]); // should return 24


// find how many divisors there are in a number
// Example 5 gets 2 divisors 1 and 5 so answer is 2

function getDivisorsCnt(num){
    var results = [];
    for(var i=1;i<=num;i++){
      if(num%i===0){
      results.push(i);
      }
    }
    return results.length;
}

getDivisorsCnt(48); --> //10

function nameScore (str){
	str=str.toUpperCase();
	var alpha = {'ABCDE':1, 'FGHIJ':2, 'KLMNO':3, 'PQRST':4, 'UVQXY':5};
	var results={};
	var total = 0;

	for (var i=0;i<str.length;i++){
		for(var key in alpha){
			if(key.indexOf(str[i])!==-1){
				total+=alpha[key];
			}
		}
	}
	results[str]=total;
	return results;
}

nameScore("Joelle");


//Longest Palindrome

function longestPalindrome(s){
var longest = 0;

for(var i=0;i<=s.length;i++){
  for(var j=i+1;j<=s.length;j++){
  	var str = s.slice(i,j); //slice starting at i up to j_ shallow copy into new Array
  	var l = str.length;
  	if(isPalindrome(str) &&  longest<l){
  		longest = l;
  	 }
   }
  } 
return longest;
}



function isPalindrome(s){ //simple solve for palindrome
	var arr = s.split("");
	return s===arr.reverse().join('');
}


longestPalindrome("adeaabbaaccd"); // should return 6;

//Possible-Test-Cases

/*

Test.assertEquals(longestPalindrome("adcaabbaacde"), 6); 
Test.assertEquals(longestPalindrome('aa'), 2);
Test.assertEquals(longestPalindrome('cccdddccc'),9); 

*/


//Find the "shortest word in a string"

function shortestStr(str){
	str = str.split(' '); //split into individual words
	var shortest = null;
	for(var i =0;i<str.length;i++){
		if(shortest===null || str[i].length<shortest){
			shortest = str[i].length;
		}
	}
	return shortest;
}

//Another way

function shortestStr(str){
str = str.split(' ');
str.sort(function(a,b){return a.length - b.length;});
return str[0];
}

//this can also work for finding the longest word in a string as well.

//Find the odd number(s) out when given two arrays

function oddOut (a, b){
	var results = [];
	for(var i=0;i<a.length;i++){
		if(b.indexOf(a[i])===-1){
			results.push(a[i]);
		}
	
	}
return results;
}

//Test
oddOut([1,3,5,6,7,8],[1,3,5,6])//--> should return 4 and 7

 
