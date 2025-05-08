{
   // 

      


//    let helloworld = "Hello World" ;
// console.log(helloworld);

 


function formatString(input: string, toUpper?: boolean): string {
   if (toUpper === false) {
     return input.toLowerCase();
   }
   return input.toUpperCase();
 }
 
 
 console.log(formatString("Hello World"));          
 console.log(formatString("Hello World", true));    
 console.log(formatString("Hello World", false));
 

   // 
}