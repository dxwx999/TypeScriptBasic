/* interface A{
  fn: (value: number)=>string
}
interface B extends A{
  fn: (value: string)=>string
}
 */

interface A{
  fn: (value: number)=>string
}
interface B {
  fn: (value: string)=>string
}

type Q = A & B

let q: Q = {
  fn(value: number | string){
    return ''
  }
}