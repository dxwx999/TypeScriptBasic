interface Singable{
  sing(): void
  name: string
}

class Person2 implements Singable{
  name = 'jack'
  sing(){
    console.log('你是我的小呀小苹果');  
  }
}