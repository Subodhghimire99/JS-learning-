//creating objects with prototype passed 

// var productProto = {
//     brandName: "Our products",
//     greet: ()=> {
//         console.log("Hello user")
//     }
// }

// var phone = Object.create(productProto, {
//     Name: {value:"Iphone"},
//     model: {value:"SE 2"},
//     releaseYear: {value:2020}
// });
// phone.greet();


//js closures

// var IntQuestions = function(job="unknown") {
//     return function Question(name){
//         if (job === 'teacher')
//         {
//             console.log("can you teach " + name + "!");
//         }
//         else if (job === 'designer')
//         {
//             console.log("Can you design " + name + "!");
//         }
//         else{
//             console.log("What do you do ?" + name + "!");
//         }
//     }
// }
// var teacher = IntQuestions("teacher");
// var designer = IntQuestions("designer")
// teacher("Mark");
// designer("Subodh");
// teacher("Naidu");
// var unknown = IntQuestions()
// unknown("MArk")



//passing function as parameters


// var mainFunc = function(num1, num2, fn){
//     console.log("Inside mainFunc");
//     var sum = fn(num1,num2);
//     console.log("sum = " + sum );
// }

// function add(a,b) {
//    console.log("Inside add");
//    return a+b
// }

// mainFunc(4,5,add);





// functions returning functions

// var operations = (operation) => {
//     if (operation === "add") {
//         return function(num1, num2){
//             console.log("add function" + (num1+num2));
//         }
//     }
//     else if (operation === "sub"){
//         return function(num1,num2) {
//             console.log("sub function" + num1-num2)
//         }
//     }
//     else{
//         console.log("No operaion result");
//     }
// }


// var opadd = operations("add");
// opadd(5,6)




// IIFE("Immediately Invoked Function Expressions")


// var a=10;
// var b=20;

// (function (){
//     var a = 19;
//     var b = 20;
//     console.log("See it is executed without calling\nit works as an expression\n");
//     console.log("sum inside IIFE = " + (a+b))
// })()

// console.log("Sum outside function = " + (a+b));



//Apply, Call                       call and apply has first argument as setting this keyword
                                    // apply takes other arguments od function in array
// var subodh = {
//     firstName : "Subodh",
//     lastName : "Ghimire",
//     job : "student",
//     intro : function(age){
//         console.log(`Hello I am ${ this.firstName } ${ this.lastName } and I am a ${ this.job } . I am ${ age } years old.`)
//     }
// }

// subodh.intro(18);

// var mark = {
//     firstName : "Mark",
//     lastName : "Bashyal",
//     job : "Teacher"
// }

// subodh.intro.call(mark, 16);
// subodh.intro.apply(mark,[19]);


//bind function 
// used to borrow other function by fixing the argument
// bind returns a function

// function calculator (age , fn) {
//     var eligible = fn(age);
//     console.log("Eligiblity: "+ eligible);
// }

// function ageCheck(eligibleAge, age) {
//     if (age >= eligibleAge) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// var usChecker = ageCheck.bind(this, 22);
// calculator(25, usChecker);
