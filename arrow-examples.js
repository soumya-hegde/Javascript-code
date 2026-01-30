//add Index to the given array
const arr = [5,6,7];
const addIndex = arr => {
    const result = arr.map((ele,i) => ele + i);
    return result;
}
console.log(addIndex(arr));
