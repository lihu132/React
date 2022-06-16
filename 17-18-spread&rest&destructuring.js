const numbers = [1, 2, 3]
const newNumbers = [numbers, 4]
const newNumbers1 = [...numbers, 4]

console.log(newNumbers);
console.log(newNumbers1);
//spread


const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age: 20
}

console.log(newPerson);
//spread


const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
//rest


const aray = [1, 2, 3];
[num1, num2] = [1, 2, 3];

console.log(num1, num2);