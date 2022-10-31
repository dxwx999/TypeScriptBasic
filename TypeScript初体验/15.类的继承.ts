class Animal{
  move() {console.log('Moving along');}
}

class Dog extends Animal{
  wolf() {console.log('dogWolf!!!');
  }
  name='二哈'
}


const dog = new Dog()

dog.move()
dog.wolf()
console.log(dog.name);
