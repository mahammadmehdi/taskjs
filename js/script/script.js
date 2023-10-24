// --------------------------------------------------task3-------------------------------------------------------------------------------
// 1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
let sum = 0
    for (let i = 0; i < 100; i++) {
        if(i%11===0){
            sum +=i
            
        }
        
    }console.log(sum);

    // --------------------------------------------------task4-----------------------------------------------------------------------------
    // Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.

    const arr = [34, 56,23,78,102,133,48]
    let num = 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i]%2===0){
        if(num<arr[i])
            num=arr[i]
    }
       
        }
        console.log(num);

         // --------------------------------------------------task5------------------------------------------------------------------------
    // Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.

    const array =[34, 56,23,78,102,133,48];
let num1 = array[0]; 
for (var i = 0; i < array.length; i++) {
    if(array[i]<num1)
    {
    
        num1 = i;
    }

}
  console.log(num1);

  

        
            

        
    

    