let num1 = 1;
let num2 = num1;
num1 = 3;
console.log(num2);
//primitive value just pass value





const person = {
    name: 'max'
};

const secondPerson = person;
person.name = 'geelong'

console.log(secondPerson);
//obj and array pass the pointer, so value will be changed


const thirdPerson = {
    ...person
};
person.name = 'richmond'

console.log(thirdPerson);
//with spread, can pass value only, not pointer to avoid the bug