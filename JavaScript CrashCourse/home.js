// conditionals 


// && = AND
// || = OR


var age = prompt('What is your age?'); // you wanna use "var" when you are going to prompt for an answer

if ((age <=17)){
    status = 'you are a minor'
} else if ((age >= 17) && (age <= 101)) {
    status = 'you are not a minor'
 } else {
     status = 'you are immortal'
 } 
 console.log(status);


 // switch statements
 // differ between weekday and weekend
 // lets say day 0 ----> Sunday 
 // day 6 ----> Saturday
 // day 4 ----- Thursday 
 switch (4) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
 }
 console.log(text);