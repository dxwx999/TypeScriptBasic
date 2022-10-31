 class Animal2{
  protected move(){
    console.log('Moving along!');
  }
 }

 class Dog2 extends Animal2{
  bark(){
    console.log('汪');
    this.move()
  }
 }

 const dog2 = new Dog2()
 dog2.bark()
