// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    let first = 0;
    let second = first + 1;
    if(str1.length > str2.length){
        return false;
    }
    for(let i=0; i < str2.length; i++){
        if(str1[first] === str2[i]){
            first++;
            if(first == str1.length){
                return true;
            }
        }
    }
    return false;
  }