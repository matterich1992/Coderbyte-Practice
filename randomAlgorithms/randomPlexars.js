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