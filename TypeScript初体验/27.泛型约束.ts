/* function id <Type>(value: Type): Type{
  console.log(value.length);
  return value
} */


// function id <Type>(value: Type[]): Type[]{
//   console.log(value.length);
//   return value
// }


interface ILength {length: number}

function id <Type extends ILength>(value: Type): Type{
  console.log(value.length);
  return value
}
id(['a','b','c']) //3
id('absddfas')  //8
id({length : 100 , name: 'jack'})  //100

