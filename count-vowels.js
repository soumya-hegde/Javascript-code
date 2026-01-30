const str = "react";
const vowels = "aeiou";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
  /* time complexity
  for (let j = 0; j < vowels.length; j++) {
    if (str[i] == vowels[j]) {
      count++;
    }
  }*/
}
console.log(count);

console.log("using function");
// using function
function countVowels(str2){
  const str = str2.toLowerCase();
  const vowels = "aeiou";
 // const vowels = "aeiouAEIOU"
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
    count++;
    }
  }
  return count;
}
console.log(countVowels('javascript'));
console.log(countVowels('REACT'));

console.log("using function expression");

// using function expression
const countVowels2 = function(str){
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
    count++;
    }
  }
  return count;
}
console.log(countVowels2('javascript'));
console.log(countVowels2('REACT'));
