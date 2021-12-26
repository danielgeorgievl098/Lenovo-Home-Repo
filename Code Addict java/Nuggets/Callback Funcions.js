// array methods, setTimeout, event listeners etc

function toUpperCase(string) {
  console.log(string.toUpperCase());
}
toUpperCase(`jameson`);

function handleName(name, cb) {
  const fullName = `${name} Smith`;
  cb(fullName);
}

function reverseString(value) {
  console.log(value.split(``).reverse().join(``));
}

handleName(`Mike`, toUpperCase); // do not envoke func when passing it in
handleName(`Jake`, reverseString);
handleName(`Nicole`, (a) => console.log(a)); //this shows you don't need to have the func set up beforehand, you can do in the argument
