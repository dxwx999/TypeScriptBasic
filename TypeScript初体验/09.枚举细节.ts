let songs: string[] = ['南山南啊','被球被']

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}


function changeDirection3(direction:Direction2){
  console.log(direction);
}


changeDirection3(Direction2.Down)