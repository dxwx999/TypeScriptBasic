function getProp<Type, Key extends keyof Type>(obj: Type,key: Key){
  return console.log(obj[key]); //18
}
getProp({name:'jack',age:18},'age') 