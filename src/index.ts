class Human {
  public name: string;
  public age: number;
  public gender: boolean;
  constructor(name: string, age: number, gender: boolean) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const sleep = new Human("Sleep", 30, true);

const person = {
  name: "Sleep",
  age: 30,
  gender: true
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender?"male":"female"}!`;
};

console.log(sayHi(sleep));

export {};