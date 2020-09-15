interface Human {
  name: string;
  age: number;
  gender: boolean;
}

const person = {
  name: "Sleep",
  age: 30,
  gender: true
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender?"male":"female"}!`;
};

console.log(sayHi(person));

export {};