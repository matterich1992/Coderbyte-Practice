//vowelCount counts the vowels in a string and returns a count
function vowelCount (str){
  var count = 0;
  for(var i =0;i<str.length;i++){
    
    if(str[i]==='a'||
        str[i]==='e'||
        str[i]==='o'||
        str[i]==='i'||
        str[i]==='u'){
          count++;
        }
  }
  
  return count;
  
}