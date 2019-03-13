function bubbleSort(arr){
  let noSwaps = false;
  for(let i = arr.length -1; i > 0; i--){
    noSwaps = true;
    for(let j = 0 ; j < i; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        console.log(arr);
        noSwaps= false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([2,6,4,8,7,10,9]));