// Time Coversion - converts one number to hours and minutes

function timeConversion(num){
  var hours = Math.floor(num/60);
  var minutes = num %60;
  
  return hours + ":" + minutes;
}

timeConversion(136): //--> 2:16