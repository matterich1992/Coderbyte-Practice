// palindrome - chekcs if string is the same forwards and backwards like 'racecar'
// will return true or false;

function Palindrome(str){
  for(var i=0; i<str.length; i++){
   if(str[i] !== str[str.length - i - 1]){
     return false;
   }
  }
  return true;
}