

// function add(num1: number,num2: number): number{
//   return num1+num2
// }

// const add = (num1: number, num2: number): number=>{
//   return num1 + num2
// }

// const add: (num1: number, num2: number)=>number =(num1,num2)=>{
//   return num1+num2
// }


function mySlice(start?: number, end?: number): void{
  console.log('起始索引：',start,'结束索引: ',end);
  
}


mySlice() //起始索引： undefined 结束索引 undefined
mySlice(1) //起始索引： 1 结束索引 undefined
mySlice(1,2) //起始索引： 1 结束索引 2  