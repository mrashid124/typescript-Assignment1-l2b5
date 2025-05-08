
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const array of arrays) {
      for (const item of array) {
        result.push(item);
      }
    }
    return result;
  }
  
  
  const result1 = concatenateArrays(["a", "b"], ["c"]);
  const result2 = concatenateArrays([1, 2], [3, 4], [5]);
  
  console.log(result1); 
  console.log(result2); 
  