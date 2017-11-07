// // // function b(){
// // //
// // // console.log("b: "+myVar);
// // // }
// // // function a(){
// // //   var myVar = 2;
// // // // console.log("a: "+myVar);
// // //   b();
// // //   }
// // //
// // //
// // // a();
// // // var myVar = 1;
// // // console.log("outside: "+myVar);
// //
// // let a =5;
// // let b = 6;
// // if(a<b){
// //   let c =true;
// //   console.log(c);
// // }
// //
// // x();
// //
// // function x(){
// //   let y = 5;
// //   console.log(y);
// // }
// //
// //
// // console.log(y);
// // var x="Rajesh Avula";
// //
// //
// //
// // function log(a){
// //   console.log(a())
// // }
// //
// // log(function(){console.log('hi');})
//
//
// // var x = 3
// // var y = x
// //
// // x = 'Vineeth'
// // console.log(y)
//
// // function Prefixer(){
// //   this.prefix = "rajesh";
// // }
// // // Prefixer.fname="Avula"
// // // // Prefixer("Rajesh")
// // // //
// // // // console.log()
// // // var x = new Object({name:"Rajesh",lname:"Avula"})
// //
// // var pre = new Prefixer()
// // console.log(pre)
//
// //
// //
// //
// // function cat(name) {
// //     this.name = name;
// //     this.talk = function() {
// //         alert( this.name + " say meeow!" )
// //     }
// // }
// //
// // cat1 = new cat("felix")
// // console.log(cat1); //alerts "felix says meeow!"
// //
// // cat2 = new cat("ginger")
// // console.log(cat2); //alerts "ginger says meeow!"
//
//
//
// // function person(){
// //
// //   return function(){
// //     console.log("Rajesh");
// //   }
// //
// // }
// //
// // var x = person()
// // // x();
//
// //
// // function sayHiLater(){
// //
// //   var greeting = "Hi";
// //
// //   setTimeout(function(){
// //     console.log(greeting);
// //   }, 10000);
// //
// //   console.log("Rajesh..............")
// // }
// //
// //
// // sayHiLater();
//
//
// // long running function
// // function waitThreeSeconds() {
// //   console.log("rege");
// //     var ms = 3000 + new Date().getTime();
// //     while (new Date() < ms){}
// //     console.log('finished function');
// // }
// //
// // function clickHandler() {
// //     console.log('click event!');
// // }
// //
// // // listen for the click event
// // document.addEventListener('click', clickHandler);
// //
// //
// // waitThreeSeconds();
// // console.log('finished execution');
//
// //
// // function tellMeWhenDone(callback) {
// //
// //     var a = 1000; // some work
// //     var b = 2000; // some work
// //
// //     setTimeout(callback,10000); // the 'callback', it runs the function I give it!
// // console.log("Rajesh Avula")
// // }
// //
// //
// //
// //
// //
// // tellMeWhenDone(function() {
// //
//     // console.log('All done...');
// //
// // });
//
// // arr = [1,2,3]
// //
// // function mapForEach(arr1, func, j){
// //   var arr2 = [];
// //   for(var i = 0; i < arr1.length; i++){
// //     arr2.push( func( j> arr1[i] );
// //   }
// //   return arr2;
// // }
// //
// // secondFunction = function(limiter){
// //   return limiter;
// // }
// //
// // var arr3 = mapForEach(arr,secondFunction, j)
//
//
// var rajesh = function(limiter,item){
//   console.log( item > limiter);
//   console.log( item);
//   console.log( limiter);
// }.bind(this,1)



// (function(){
//   var root = this;
//   console.log(this);
// var previousUnderscore = root._;
// // console.log(previousUnderscore);
// console.log(root._);
// root._ = previousUnderscore
// console.log(root._);
// })()

//
// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     utiga: {},
//     getFullName: function() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }
// person.utiga = {nekunduku: "sollu"}
// console.log(person.utiga.nekunduku)
// var name2 = {
//             firstname:"Rajesh",
//             lastname:"Avula",
//             getFullName: function() {
//                 return this.firstname + ' ' + this.lastname;
//               }
//           }
// var rbh = {lastname: "Voffsaf"};
// rbh.__proto__= name2;
// console.log(rbh);

// (function(){
//   var root=this;
//   root.value = 5;
//   _={name:"Rajesh"};
//   var value = 6;
//   console.log(value)
// }())
// //
//  console.log(value)
//
// _["firstnamw"] = "werw"
// console.log(_);

// var john = {
//     firstname: 'John',
//     lastname: 'Doe'
// }
//
// // don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstname);
//
// var jane = {
//
// }
//
// jane.__proto__ = person;
// console.log(jane.getFullName());
//
// person.getFormalFullName = function() {
//     return this.lastname + ', ' + this.firstname;
// }
//
// console.log(john.getFormalFullName());
// console.log(jane.getFormalFullName());


// //
// var r = {}
// // console.log(r);
// //
// r.__proto__ = name;
// // console.log(r);
// console.log(r.getfullname());
//

// var _="Rajesh"
// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }
//
// var john = {
//     firstname: 'John',
//     lastname: 'Doe'
// }
//
// // don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;
//
// for (var prop in john) {
//     if (john.hasOwnProperty(prop)) {
//         console.log(prop + ': ' + john[prop]);
//      }
// }
//
// var jane = {
//     address: '111 Main St.',
//     getFormalFullName: function() {
//         return this.lastname + ', ' + this.firstname;
//     }
// }
//
// var jim = {
//     getFirstName: function() {
//         return firstname;
//     }
// }
//
// _.extend(john, jane, jim);
//
// for (var prop in john) {
//      if (john.hasOwnProperty(prop)) {
//         console.log(prop + ': ' + john[prop]);
//      }
// }


// function Person(firstname, lastname) {
//
//     // console.log(this);
//     // this.firstname = firstname;
//     // this.lastname = lastname;
//     // console.log('This function is invoked.');
//
// }
//
// Person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname;
// }
//
// var john = new Person();
// console.log(john);


// function person(){
//   console.log(arguments);
// }
//
// person("Rajesh","Vineeth")

// var jane = new Person('Jane', 'Doe');
// console.log(jane);
//
// Person.prototype.getFormalFullName = function() {
//     return this.lastname + ', ' + this.firstname;
// }

// console.log(john.getFormalFullName());


var g = G$('john','Doe');
g.greet().setLang('es').greet("aerteq").log();

$('#login').click(function(){
  var loginGrtr = G$('john','Doe');
  $('#logindiv').hide();
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})



// var counter = (function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   };
// })();
//
// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1
