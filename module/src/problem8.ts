{
    // 
    
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Negative number not allowed"));
            } else {
              resolve(n * n);
            }
          }, 1000);
        });
      }
      
      
      squareAsync(4)
        .then(console.log) 
        .catch(console.error);
      
      squareAsync(-3)
        .then(console.log)
        .catch(console.error); 
      

    // 
}