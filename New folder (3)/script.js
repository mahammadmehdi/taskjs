
// // const obj={
// //     name:"Mehemmed",
// //     age:20,
// //     car:"Mustang",
// //     class:"Azmf201",
// //     callNameAndAge: function () {

// //         console.log(this.name + "-" + this.age);
        
// //     }
// // }
// // obj.callNameAndAge()

// //-------------------------------------------------------------------------------------------------------------------------------------------

// // const obj1={
// //     name:"Mehemmed",
// //     age:20,
// //     car:"Mustang",
// //     class:"Azmf201",
// //     callNameAndAge: x=> console.log(this.name + "-" + this.age)
// //     }
// // obj1.callNameAndAge()


// // delete obj.car;

// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));


// // const name= "Murad"
// // const surname= "Mirzezade"
// // const age=19

// // const Muradobj={
// //     name,
// //     surname,
// //     age
// // }
// // console.log(Muradobj);


                            


// //  const name =obj.name
// //  const{name}=obj
// //  const copy = obj.name
// //  obj.name="saleh"

// //  console.log(obj);
// //  console.log(copy);

// //  Object.entries(obj).forEach(x=>console.log(x))

// // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// //  for (const x of Object.entries(obj)) {
// //      console.log(x);
    
// // // }

    



// const obj1={
// name: "Mehemmed",
// age:19,
// car:"Mustang",
// callName(a,b,c,d) {
//     console.log(this.name + " Necesen? " + a + "-" + b + "-" + c + "-" + d)
//   }
// }
// // obj1.callName()

// const obj2={
//     name: "qagas"
// }

// const obj3={
//     name: "huseyn"
// }

// // obj1.callName.call(obj2,1,2,3,4)
// // obj1.callName.apply(obj3,[1,2,3,4])

// const salamnecesen = obj1.callName.bind(obj2)


// salamnecesen( 1,2,3,4 )




// function Person(name,surname,age){
//     this.name=name
//     this.surname=surname
//     this.age=age
//     this.getInfo = function(){
//         console.log(this.name + this.surname + this.age );
//     }
// }
// const mehemmed = new Person("mehemmed", "mehdiyev", 19)
// console.log(mehemmed);
// mehemmed.getInfo()                                                                    




// const salam = [1,2,3,4,5,6]

// Array.prototype.mehemmed="salam123"
// console.log(salam.mehemmed);



// const arr = [1,2,3,4,4,5,45,3547656,756,756]
// Array.prototype.yol="error 404 not found"
// console.log(arr.yol);


// const arr1 = [1,2,3,4,5,6]
// console.log(arr.yol);


// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.getInfo = function () {
//             console.log(this.name + " - "+ this.surname+ " - "+  this.age);
            
//         };
//     }
// }

// class Human extends Person{
//     constructor(name,surname,age){
//         super(name,surname,age)
//     }
// }

// const Sovqu = new Person("sovqu","huseynli", 19)
// const Murad = new Person("Murad","Mirzezade", 19)
// console.log(Sovqu.getInfo());

//Task1--------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class CustomMatch {
//     constructor(eded){
//         this.eded=eded}
//         plus(num) {
//             this.eded += num
//             return this
//         }
//         minus(num) {
//             this.eded -= num
//             return this
//         }
//         multiply(num) {
//             this.eded *= num
//             return this
//         }
//         divide(num) {
//             this.eded /= num
//             return this
//         }


    
    
// }
// Number.prototype.plus = function (b) {
//     return this + b
// }
// Number.prototype.minus = function (c) {
//    return this - c
// }
// Number.prototype.multiply = function (d) {
//    return this * d
// }
// Number.prototype.divide = function (e) {
//    return this / e
// }


// let result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// console.log(result);
//Task2-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class Kitablar {
//         constructor(kitabadi,yazaradi,yazildigiil,qiymet,){
//             this.kitabadi=kitabadi
//             this.yazaradi=yazaradi
//             this.yazildigiil=yazildigiil
//             this.qiymet=qiymet
            
            
//             }
//             QiymetIste(endirimliqiymet){
//                 this.endirimliqiymet = this.qiymet-(this.qiymet*endirimliqiymet)/100
//                  return this
        
//  }
//  }
//  const kitab = new Kitablar ("Bu seherde kimse yoxdur ","Rovsen Abdullaoglu","2015",7)
//  console.log(kitab.QiymetIste(5));
 //Task3-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const arr = [1,2,3,4,5]
const arr2=[]
function ikinci(arr,cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])   
        
        
    }
    return arr2
}
    function cb(element) {
        arr2.push(element*5)
        
    }
     

console.log(ikinci(arr,cb));
