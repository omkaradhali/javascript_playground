same = (str1, str2) => {
  let fc1 = {};
  let fc2 = {};
  
  if(str1.length !== str2.length){
    return false;
  }
  for(let char of str1.split('')){
    fc1[char] = (fc1[char] || 0) + 1;
  }

  for(let char of str2.split('')){
    fc2[char] = (fc2[char] || 0) + 1;
  }

  for(let key in fc1){
    if(!(key in fc2)){
      return false
    }
    if(fc1[key] !== fc2[key]){
      return false
    }
  }
  
  return true;
}

//same("abc", "cba") --> true
//same("abc", "cbaw") --> false