interface IPerson{
  name: string,
  age: number,
  sayHi(): void,
}


let person: IPerson = {
  name:'jack',
  age:18,
  sayHi(){}
}