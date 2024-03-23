let myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  let myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  let myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable);

console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);
