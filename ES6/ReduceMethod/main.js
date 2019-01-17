let simpleArray = [10, 20, 22, 11, 22];

//Using reduce method to find sum of all elements in array.
let result = simpleArray.reduce((total, amount) => {
  total += amount;
  return total;
});
console.log(result);

//finding average of all array elements using reduce method.
let resultTwo = simpleArray.reduce((total, amount, i, array) => {
  total += amount;
  if (i === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});
console.log(resultTwo);

//Creating a tally of items from a array.
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
let count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});
console.log(count);

//flattenning or array
const someArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flattenedArray = someArray.reduce((flat, item) => {
  return flat.concat(item);
}, []);
console.log(flattenedArray);

//Good source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
