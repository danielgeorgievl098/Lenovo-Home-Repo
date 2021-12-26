// objects 


let writer = {first: 'Goerge', last: 'Orwell', heigh:150, age:78,}; // one way to make an obj. This is not really a correct way to style an obj
console.log('First name is:', writer.first,'Last name is:', writer.last);


let me = {                            // you should style objs like this
    FirstName:'Daniel',
    SecondName: 'Tsvetanov',
    LastName: 'Georgiev',
    MyAge: 23,
    MyHeight: 180,
};

me.FirstName = 'Даниел'; // changes the value
console.log(me.FirstName);

me.MyAge++; //increments my age by 1 
console.log(me.MyAge);

let you = {
    FirstName:'Somebody',
    SecondName: 'Цветанов',
    LastName: 'Георгиев',
    YourAge: 26,
    YourHeight: 192,
    
    StudentInfo: function(){                            //this creates a function inside the obj thatwhen called gives the Second Name and Age
        return this.SecondName + '\n' + this.YourAge;
    }
};

console.log(you.StudentInfo());