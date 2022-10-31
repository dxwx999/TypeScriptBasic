// type F5 = ()=>string
// type F6 = ()=>string

// let f5: F5=()=>{return ''}
// let f6: F6 = f5


type F7 = ()=>{ name: string}
type F8 = ()=>{ name: string; age: number}
let f7: F7
let f8: F8 = ()=>{return {name:'张三',age:16}}
f7= f8