let p = { x: 1 , y: 2}

//第一种
// function formatPoint(x: number,y: number){
//   console.log(x+y); 
// }
// formatPoint(200,1)


// 第二种
function formatPoint(point:typeof p){
  console.log(point.x+point.y);  //201
}

formatPoint({y:200,x:1})