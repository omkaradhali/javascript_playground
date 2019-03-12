function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.ceil((left+right)/ 2);

  while(left < right){
    mid = Math.ceil((left+right)/ 2);
    if(arr[mid] === val) return mid;
    if(arr[mid] > val){
      right = mid;
    }
    if(arr[mid] < val){
      left = mid;
    }
    
  }
  return -1;
}

console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95))