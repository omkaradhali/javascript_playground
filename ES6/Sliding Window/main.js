slidingWindow = (arr, num) => {
  let max = 0;
  let temp = 0;
  for(let i = 0; i < num ; i ++){
    temp += arr[i];
  }
  max = temp;
  for(let j = num; j < arr.length; j++){
    temp = temp - arr[j - num] + arr[j];
    max = Math.max(max, temp);
  }
  return max;
}


console.log(slidingWindow([1,2,3,4], 2))