const name = "Sleep", age = 24, gender = true;

const sayHi = (name , age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender?"male":"female"}`);
};

sayHi(name, age);

export {};