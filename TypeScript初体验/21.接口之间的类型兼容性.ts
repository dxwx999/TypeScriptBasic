interface PoinD {x: number;y: number}
interface Poin2D {x: number; y: number}
interface Poin3D {x:number;y: number; z: number}
let p1: PoinD = {x:1,y:2}
let p2: Poin2D = p1


let p3: Poin3D={x:1,y:2,z:3}
p2 = p3
console.log(p2); //{ x: 1, y: 2, z: 3 }


class Poin4D{
  x: number = 0
  y: number = 0 
  z: number = 0
}

p2 = new Poin4D
console.log(p2); //Poin4D { x: 0, y: 0, z: 0 }

