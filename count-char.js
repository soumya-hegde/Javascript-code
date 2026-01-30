const str = "javascript";
const char = "a";
let count = 0;
//for (let i = 0; i < str.length; i++) {
for(let i of str){
  if (i == char) {
  //if (str[i].includes(char)) {
    count++;
  }
}
console.log(count);

// using functions 
function countChar(str, char){
  let count = 0;
  for(let i = 0;i<str.length;i++){
    if(str[i] == char){
      count++;
    }
  }
  return count;
}
//console.log(countChar('abcabba', 'a'));
const res = countChar('abcabba', 'a');
console.log(res);