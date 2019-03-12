function StringPattern(str, pat){
  let counter = 0;
  for(let i = 0; i < str.length; i ++){
    for(let j =0; j < pat.length; j++){
      if(str[i+j] !== pat[j]){
        break;
      }; 
      if(j === pat.length -1) {
        counter++;
      };
    }
  }
  return counter;
}

console.log(StringPattern("wowomghhuiomgomg", "omg"));