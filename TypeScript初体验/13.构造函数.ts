class Person1{
  age: number =0
  gender: string =""

  constructor(age: number,gender: string){
    this.age = age
    this.gender = gender
  }
}

const s = new Person1(18,'男')
console.log(s.age,s.gender);

