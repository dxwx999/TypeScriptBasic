class Animal3 {
  private move(){
    console.log('Moving along!');
  }
  walk(){
    this.move()
    console.log('边叫边跳');
    
  }
}


const animal3 = new Animal3()

animal3.walk()

