const sayHi = (name: string , age: number, gender?: boolean): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender?"male":"female"}!`;
};

console.log(sayHi("Sleep", 30, true));

export {};