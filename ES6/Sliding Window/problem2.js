slidingWindowString = (str) => {
  let store = '';
  let temp = str.split('');
  let res = temp[0];
  for(let i=1; i < temp.length; i++){
    let test = res.indexOf(temp[i]);
    if(test === -1){
      res += temp[i]
    }else 
    if(store.length > res.length){
      res = '';
    } else {
      store = res;
      res = temp[i];
    }
    
  }
  return store;
}

console.log(slidingWindowString('abcdefghijaklmnopqrstuvqxb'));