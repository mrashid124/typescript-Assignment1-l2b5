//    let helloworld = "Hello World" ;
// console.log(helloworld);
// {// 
//     type arrtype = number;
//     const myArray:arrtype[]=[5,2,3,4,5]
//     const totalOfArray = (myArray:arrtype[]):number=>{
//         let total = myArray.reduce((initialtotal, index)=>initialtotal + index, 0)
//         return total;
//     }
//     console.log(`the total of Array ${myArray}  is : `,totalOfArray(myArray))
//     // 
//     }
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
console.log(formatString("Hello World"));
console.log(formatString("Hello World", true));
console.log(formatString("Hello World", false));
