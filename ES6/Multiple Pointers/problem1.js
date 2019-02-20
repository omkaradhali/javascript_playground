//Finding unique values in an array.

//First try
uniqueCount = (inputArray) => {
  let firstP = 0;
  let secondP = firstP + 1;
  let resultCount = 0;
  while(secondP < inputArray.length){
    if(inputArray[firstP] === inputArray[secondP]){
      resultCount = (resultCount > 0) ? resultCount : resultCount + 1;
      secondP++;
    } 
    if(inputArray[firstP] !== inputArray[secondP] && secondP < inputArray.length){
      resultCount = (resultCount > 0) ? resultCount + 1 : resultCount + 2;
      firstP = secondP;
      secondP++;
    }
  }
  return resultCount;
}

//second try
uniqueCountTwo = (arr) => {
  let i = 0;
  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(uniqueCount([1,2,3,4,4,4,7,7,12,12,13]));
console.log(uniqueCountTwo([1,2,3,4,4,4,7,7,12,12,13]));