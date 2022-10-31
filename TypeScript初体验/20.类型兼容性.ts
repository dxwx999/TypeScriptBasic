//演示类型兼容性：

let arr = ['a','b','c']


arr.forEach(item=>{})
arr.forEach((item,index)=>{})
arr.forEach((item,index,array)=>{})


class P1 { x: number=0; y: number=0}
class P2 { x: number=0; y: number=0;z: number=0}

const pNew: P1 = new P2()