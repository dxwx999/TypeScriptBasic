class Person3{
  readonly age: number = 17
  constructor(age: number){
    this.age = age
  }
/*   setAge(){
    this.age = 20  //无法分配到"age",因为它是只读属性
  } */
}


// interface Iperson{
//   readonly name: string
// }
// let obj: Iperson={
//   name:'jack'
// }

// obj.name='asjj'  //无法分配到"name",因为它是只读属性



let obj2:{readonly name: string}={
  name:'jack'
}