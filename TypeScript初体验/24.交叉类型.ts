interface W1 {
  name: string
  say(): number
}
interface C1{
  phone: string
}
type concat = W1 & C1

let obj: concat ={
  name:'张三',
  phone:'12421412',
  say(){
    return 1
  }
}