// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, num){
    let first = 0;
    let second = arr.length - 1;
    while(second > first){
        if((arr[first] + arr[second])/2 < num){
            first++;
        } else if((arr[first] + arr[second])/2 > num){
            second--;
        }else if ((arr[first] + arr[second])/2 === num){
            return true;
        }
    }
    return false
  }

  console.log(averagePair([1,2,5], 2.5));