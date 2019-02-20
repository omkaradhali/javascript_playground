//Write a function  which accepts a sorted array of integers. the function should find the first
//pair where the sum is 0. Return an array that includes both the values. Return undefined otherwise.

sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right){
    if(arr[left] + arr[right] === 0){
      return [arr[left], arr[right]];
    };

    if(arr[left] + arr[right] > 0){
      right--;
    }

    if(arr[left] + arr[right] < 0){
      left++;
    }
  }

  return undefined;
}


console.log(sumZero([-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
