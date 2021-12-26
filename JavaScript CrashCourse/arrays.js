// Arrays 
let basket = ['olives','cinnamon','mustard','broccoli','ketchup'];

basket [3] = 'BBQ';
for (let i = 0; i <basket.length; i++)[
    console.log(basket[i])
]

let pouch = ['liver','heart','hand','head','thigh'];
console.log('this converts it to a stirng',pouch.toString());
console.log(pouch.join(' & '));
console.log(basket, basket.pop(), basket); // removes last item
console.log(basket, basket.push('SKYR'), basket); // appends at the end

pouch[pouch.length] = 'New Item'; // same as push
console.log(pouch);
pouch.shift(); //rmeoves first item from list
console.log(pouch);
pouch.unshift('BRAIN'); // adds item at the beggining
console.log(pouch);

let BothArrays = pouch.concat(basket); // joins the 2 arrays 
console.log(BothArrays);
console.log(BothArrays.slice(2, 6)); // prints 2,3,4,5
console.log(BothArrays.reverse()); // pritns it backwards 

let SomeNumbers = [5, 1, 12, 52, 345, 6666, 22, 2, 44, 1232131, 5543,]; 
console.log(SomeNumbers.sort(function(a, b) {return a-b})); // sorts the numbers in ascending order  
console.log(SomeNumbers.sort(function(a, b) {return b-a})); // sorts the numbers in descending order 

let EmptyArray = [];
for (num = 0; num <= 10; num++){
    EmptyArray.push(num); // appends the numbers from 1-10 to the empty array
}
console.log(EmptyArray);