// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.

function counttekrarlanma(arr, elementToCount) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elementToCount) {
        count++;
      }
    }
    return count;
  }
  
  
  const myArray = [1, 2, 2, 3, 4, 2, 5, ];
  const secilenelement = 2;
  const tekrarlanma = counttekrarlanma(myArray, secilenelement);
  
  console.log(tekrarlanma);
  

//3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.

        
function minMaxhesablamadanTopla(arr) {
    if (arr.length < 3) {
      return 0; // Əgər massiv 2 və ya daha az elementdən ibarətdirsə, minimum və maksimum olmayacaq, ona görə də cəmi 0 olmalıdır.
    }
  
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let toplam = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== min && arr[i] !== max) {
        toplam += arr[i];
      }
    }
  
    return toplam;
  }
  
  
  const massiv = [3,12,56,43,22,78];
  const netice = minMaxhesablamadanTopla(massiv);
  
  console.log(netice);
  

//1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.


function indeksitap(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
     
  }
  
  
  const array = [ 12,32,44,56,45];
  const value = 45;
  const indeks = indeksitap(array, value);
  
   
    console.log(indeks);
  
  