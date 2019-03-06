// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(num, pow){
  if(pow === 0) return 1;
  return num * power(num, pow-1);
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function factorial(num){
  if(num === 0) return 1;
  return num * factorial(num - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
productOfArray = (arr) => {
    let result = 1;
    
    function product(arr){
        if(arr.length === 0){
            return result;
        }
        
        result *= arr[0];
        return product(arr.slice(1));
    }
    
    product(arr);
    return result;
    
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num - 1);
   
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(num){
  let first = 0;
  let second = 1;
  let counter = 1;
  let result = 0;
  

  function recursive(num){
    if(counter === num) return second;
    counter ++;
    result = first + second;
    first = second;
    second = result;
    return recursive(num);
  }

  recursive(num);
  return second;
}
