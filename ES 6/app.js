// var count = 1;

// console.log(count);

// count++


// for (var count = 0; count < 51; count= count +2) {
//     console.log(count);
// }

































// var fruitsName = ['apple', 'banana', 'orange'];


// for(var i=0; i < fruitsName.length; i++){
//         console.log(fruitsName[i] + 's');
// }







































// function addAllValues(first, b, c) {
//     var sum = first + b + c;
//     return sum;
// }

// addAllValues(1, 2, 6);

// var sumOfAll = addAllValues(4, 2, 6);

// alert(sumOfAll);






































// var abc = 'haider';
// let username = 'ali';


// if(true){
//     let username='haider'
//     console.log(username);

// }
// console.log(username);







// const username = 'haider';
// // username = 'ali';
// console.log(username);

















// let greet = function (){
//     return 'hello es6'
// }


// let greet = () => 'hello es6';

// var usergreet = greet();
// console.log(usergreet);


// setInterval(()=>{
//     console.log('hello es6');
// }, 1000)

































// function Car(carname){
//     this.car = carname
//     console.log(this);
// }

// var suzuki = new Car('Suzuki');

// console.log(this);

































// var fruitsName = ['apple', 'banana', 'orange'];


// for(var i=0; i < fruitsName.length; i++){
//         console.log(fruitsName[i] + 's');
// }


// const arr = ['apple', 'banana', 'orange'];

// const breakfast = arr.map(fruit => {
//     return fruit + 's';
// });

// console.log(breakfast); 



// const makeToast = (breadType, topping1, topping2) => {
//     return `I had ${breadType} toast with ${topping1} and ${topping2}`;
//   };




// var numbers = [1, 4, 9]; 
// var roots = numbers.map(Math.sqrt); 
// console.log("roots is : " + roots ); 






// var a = 3;
// var b = 3;
// var c = ++a + a++;
// console.log(a)
// console.log(c)


// a++; // post incre
// ++a; // pre incre


// if (a>10){
//    if(a<20){
//        djflkgjs
//    }
//    else{

//    }
// }
// else{
//     console.log();
// }


// if(){

// }
// else{

// }




// for(var i =10 ;i<1 ; --1){
//     console.log(i)

// }

//     *
//    ***
//   *****
//  *******






























// () => {
//     return 'haider'
// }






// function Person() {
//     this.age = 0;
//     var self = this;

//     setInterval(function() {       
//         self.age++;
//         console.log(self.age);

//     }, 1000);
// }
// var p = new Person();





















// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//         console.log(this.age);

//     }, 1000);


// }
// var p = new Person();













// function getFinalPricefunc(price, tax = 0.7) {
//     return price + price * tax;

// }

// var getFinalPrice = getFinalPricefunc();












// const getFinalPrice = (price = 800, tax = 1.5, totalParam = price + tax) => {
//     console.log(price + price * tax);
//     console.log(totalParam);
// }

// getFinalPrice(400, undefined, 500 ); // 850






















// var breadType = 'brown';
// var topping1 = 'jalepino';
// var topping2 = 'cheese';

// // var meal = 'I had ' + breadType + ' toast with ' + topping1 + ' and ' + topping2 + "\n"+' it was yummy' ;

// var meal = `I had ${breadType} toast with ${topping1} and ${topping2}
// it was yummy`;

// console.log(meal);














const makeToast = (breadType, topping1, topping2) => {
    return `I had ${breadType} toast with ${topping1} and ${topping2}`;
};

const ingredients = ['wheat', 'butter', 'jam'];


// makeToast(ingredients[0], ingredients[1], ingredients[2])

var toast1 = makeToast(...ingredients);


var toast2 = makeToast(...['sourdough', 'avocado', 'kale']);


















// let mergeObject1 = {
//     userName: 'haider',

//     avatar: 'placeholder.jpg',
//     active: false,

//     userName: 'foo',
//     avatar: 'bar.jpg',


//     roll: 2643
// }


// const defaults = { avatar: 'placeholder.jpg', active: false }
// const userData = { userName: 'foo', avatar: 'bar.jpg' }

// let mergeObject = { userName: 'haider', ...userData, ...defaults, roll: 2643 }

// console.log(mergeObject);
















// let initNumber = [0, 1, 2];
// let endNumber = [7, 8, 9];

// let firstTenNumber = [...initNumber, 3, 4, 5, 6, ...endNumber];

// console.log(firstTenNumber);
// var abc = 'fees'

// var object = {
//     [abc]: 5000*12
// }

// var arr = [];

// arr[0] = 'abc';

// var a = 'userName';
// var object = {}

// object[a] = 'haider';


// function getCar(make, model, value) {
//     return {

//         make,  // same as make: make
//         model, // same as model: model
//         value, // same as value: value

//         ['make' + make]: true, // makeKia : true
//         // Method definition shorthand syntax
//         // omits `function` keyword & colon
//         depreciate() {
//             this.value -= 2500;
//         }
//     };
// }

// let car = getCar('Kia', 'Sorento', 40000);
// console.log(car);
// car.depreciate()



// var arr = ['jon', 'ducket'];

// var winnerIndx = Math.ceil(Math.random() * 2);

// var winnderName;

// console.log(winnerIndx);

// if (winnerIndx === 1) {
//     winnderName = arr[0];
// }
// else {
//     winnderName = arr[1];
// }

// var winner = {
//     [winnderName]: true
// }

// console.log(winner);































// function getCar() {
//     return {
//         make: 'Tesla',
//         model: 'g95',
//         metadata: {
//             vin: '123abc',
//             miles: '12000'
//         },
//         electricCar: true
//     };
// }

// const { electricCar, metadata: { miles } } = getCar();

// console.log(miles);





















function foo() {
    return [1, 2, 3];
}

let [a, b, c] = foo();


console.log(a, b, c);

















