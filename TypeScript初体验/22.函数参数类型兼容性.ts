// type A1 = (a: number)=>string
// type A2 = (a: number)=>string

// let a1: A1 = ()=>{return ''}
// let a2: A2 = a1



interface P2D {x: number; y: number}
interface P3D {x: number; y: number}
type H2 = (p: P2D) => void
type H3 = (p: P2D) => void

let h2: H2 =({x=12,y=215})=>{}
let h3: H3 =h2