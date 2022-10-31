class Point {
  x = 1
  y = 2

  scale(n: number): void{
    this.x*=n
    this.y*=n
  }
} 


const c = new Point()

c.scale(10)

console.log(c.x,c.y);//10 20