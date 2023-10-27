// 17.Verilmiş ədədin bölənlərinin sayını tapın

function bolenlerinSayi(say) {
    let bolenSayi = 0;
  
    for (let i = 1; i <= say; i++) {
      if (say % i === 0) {
        bolenSayi++;
      }
    }
  
    return bolenSayi;
  }
  
 
  
  console.log(bolenlerinSayi(18));
  

//  18. Verilmiş ədədin bölənlərinin cəmini və hasilini tapın Javascript
  function bolenlerinCemiVeHasili(say) {
    let cem = 0;
    let hasil = 1;
  
    for (let i = 1; i <= say; i++) {
      if (say % i === 0) {
        cem += i;   
        hasil *= i; 
      }
    }
  
    return { cem, hasil };
  }
  
  
  
  console.log(bolenlerinCemiVeHasili(12));
  
  
  