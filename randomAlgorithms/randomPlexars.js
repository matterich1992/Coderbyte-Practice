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





