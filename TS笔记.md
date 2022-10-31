# 022年10月29日19点17分开始

## 1.TypeScript是什么

### 1.1 TypeScript是什么？

TypeScript(简称:TS)是JavaScript的超集(JS有的TS都有)

TypeScript = Type+Javascript(在JS基础之上，为JS添加了类型支持)

TypeScript是微软开发的开源编程语言，可以在任何运行JavaScript的地方运行

```typescript
//TypeScript代码：有明确的类型，即:number(数值类型)
let age1: number=16
//JavaScript代码：无明确的类型
let age2 = 16
```

###  1.2 TypeScript为什么要为JS添加类型支持？

##### 背景：	

JS的类型系统存在“先天缺陷”，JS代码中绝大部分错误都是**类型**错误(Uncaught TypeError)

##### 问题：

增加了找Bug、改Bug的时间，严重影响了开发效率



从编译语言的动静来区分，TypeScript属于静态类型的编程语言，JS属于动态类型的编程语言。

##### 静态类型：

编译期做类型检查

##### 动态类型：

执行期做类型检查

##### 代码编译和代码执行的顺序：

①编译

②执行



##### 对于JS来说:

需要等到代码真正去执行的时候才能发现错误(晚)

##### 对于TS来说：

在代码编译的时候(代码执行前)就可以发现错误(早)

并且，配合VSCode等开发工具，TS可以提前到在编写代码的同时发现代码中的错误，减少找bug，改bug的时间



### 1.3 TypeScript相比JS的优势

①更早(写代码的同时)发现错误,减少找Bug、改Bug的时间，提升了开发效率

②程序中任何位置的代码都有代码提示，随时随地的安全感，增强了开发体验

③强大的类型系统提升了代码的可维护性，使得重构代码更加容易

④支持最新的**ECMAScript**语法，优先体验最新的语法，让你走在前端技术的最前沿

⑤TS类型推断机制，不需要在代码中的每个地方都显示标注类型，让你再享受优势的同时，尽量降低了成本



除此之外，Vue3源码使用TS重写、Angular默认支持TS、React与TS完美配合，TypeScript已成为大中型前端项目的首先的编程语言 



## 2.TypeScript初体验

### 2.1安装编译TS的工具包

##### 问题：为什么要安装编译TS的工具包?

##### 回答：

Node.js/浏览器，只认识JS的代码，不认识TS代码。需要先将TS代码转化为JS代码，然后才能运行

##### 安装命令：

```js
npm i -g typescript
```

##### typescript包：

用来编译TS代码的包，提供了 **tsc命令**，实现了TS->JS的转化。

##### 验证是否安装成功:

```js
tsc -v //插件typescript的版本
```

### 2.2编译并运行TS代码

①创建hello.ts文件(注意：TS文件的后缀名是.ts)

②.将TS编译为JS：在终端中输入命令，tsc hello.ts（此时，在同级目录中会出现一个同名的JS文件）

③执行JS代码：在终端中输入命令，node hello.js

##### 说明：

所有合法的JS代码都是TS代码，有JS基础只需要学习TS的类型即可

##### 注意：

由TS编译生成的JS文件，代码中就没有类型信息了

##### 编译后报错：

因为JS文件和TS文件重复声明变量导致报错

①关闭js文件后就不会报错了

②控制台输入tsc -- int 生成tsconfig.json配置文件也可以解决报错

### 2.3简化运行TS的步骤

##### 问题描述：

每次修改代码后，都要重复执行两个命令，才能运行TS代码，太繁琐

##### 简化方式：

使用ts-node包，”直接“在Node.js中执行TS代码

##### 安装命令：

```js
npm i -g ts-node(ts-node包提供了ts-node命令)
```

##### 使用方式:

```js
ts-node hello.ts
```

##### 解释：

ts-node命令在内部偷偷地将TS转换成JS后再执行JS代码

#### 19点59分



#### 23点00分

## 3.TypeScript常用类型

概述:

TypeScript是JS的超集，TS提供了JS的所有功能，并且额外增加了：类型系统

①所有的JS代码都是TS代码

②JS有类型(比如 number、string等)，但是JS不会检查变量的类型是否发生变化。而TS会检查。TypeScript类型系统的主要优势：可以显示标记出代码中的意外行为，从而降低了发生错误的可能性

#### 3.1.类型注解

```typescript
//示例代码
let age: number = 18

```

说明：代码中的:number就是类型注解
作用：为变量**添加类型约束**。比如，上述代码中，约定变量age的类型为number(数值类型)

解释：**约定了什么类型，就只能给变量赋值改类型的值**，否则会报错

#### 3.2.常用基础类型

概述：可以将TS中的常用基础类型细分为两类：①JS已有的类型 ②TS新增的类型

##### ①JS已有类型：

​		原始类型:number/string/boolean/null/undifined/symbol

​		对象类型:Object(包括了数组、对象、函数等对象)

##### ②TS新增类型

​		联合类型、自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any等

#### 3.3原始类型

##### 特点：

​		number/null/undifined/symbol/string/boolean

​		简单。这些类型完全按照JS中类型的名称来书写的

#### 3.4数组类型

##### 特点：

​		对象类型,再TS中更加细化，每个具体的对象都有自己的类型语法

​		数组类型的两种写法:(推荐使用number[]写法)

```typescript
let numbers: number[] = [1,3,5]
let Strings: Array<string> = ['a','b','c']
```

##### 联合类型：

```typescript
let arr: (number | string)[] = [1,'a',2,'b']
let arr: number | string[] = [1,2]、
let arr: (number | string)[] = ['a','b']
```

解释：|（竖线）在TS中叫来联合类型（由两个或者多个其他类型组成的类型，表示可以是这些类型中的任意一种）

注意：①这是TS中联合类型的语法，只有一根竖线

​			②添加的小括号表示，首先是数组，然后这个数组中能够出现number或者string类型的元素

​			③不添加小括号表示，既可以是number类型，也可以是string类型，但是只能是其中一个

#### 3.5类型别名

类型别名(自定义类型):为任意类型起别名。

使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名。简化改类型的使用

```typescript
type CustomArray = (number | string)[]
let arr1: CustomArray = [1,'a',2,'g']
let arr2: CustomArray = [1,'a',2,'g']
```

解释:

​		1.使用type关键字来创建类型别名

​		2.类型别名(比如，此处的CustomArray)，可以是任意合法的变量名称

​		3.创建类型别名后，直接使用该类型别名作为变量的类型注解即可

#### 3.6函数类型

函数的类型实际上指的是：函数参数和返回值的类型。

##### 为函数指定类型的两种方式:

​		①单独指定参数、返回值的类型

```typescript
function add(num1: number,num2: number): number{
  return num1+num2
} 
```

```typescript
const add = (num1: number, num2: number): number=>{
  return num1 + num2
}
```



​		②同时指定参数、返回值的类型

```typescript
const add: (num1: number, num2: number)=>number =(num1,num2)=>{
  return num1+num2
}
```

​		解释：当函数作为表达式的时候，可以通过类似箭头函数形式的语法来为函数添加类型。

​		注意：**这种形式只适用于函数表达式**

如果函数没有返回值，则设置函数返回值的类型为void

```typescript
function greet(name: string): void{
  console.log('safsa');
}
```



使用函数实现某个功能的时候，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到可选参数了。比如，数组的slice方法，可以slice ()也可以slice(1)还可以slice(1,3)

```typescript
function mySlice(start?: number, end?: number): void{
  console.log('起始索引：',start,'结束索引: ',end);
  
}


mySlice() //起始索引： undefined 结束索引 undefined
mySlice(1) //起始索引： 1 结束索引 undefined
mySlice(1,2) //起始索引： 1 结束索引 2  
```

可选参数：在可传可不传的参数名称后面添加？（问好）

注意：可选参数只能出现在参数列表的 最后，也就是说可选参数后面不能再出现必选参数

#### 3.7对象类型

JS中的对象是由属性和方法构成的，而TS中的对象的类型就是再描述对象的结构(有上面类型的属性和方法)

对象类型的写法：

```typescript
let person: { name: string; age: number; sayHi(): void; greet(name: string):void;groot:()=>void ={
    name: 'jack',
    age: 19,
    syaHi() {},
    greet(name){},
}
```

解释：

①直接使用{}来描述对象结构。属性采用**属性名:类型**的形式；方法采用**方法名(): 返回值类型**的形式

②如果方法有参数，就再方法名后面的小括号中指定参数类型(比如: greet(name:string):void)

③再一行代码中指定对象的多个属性类型时，使用;(分号)来分隔

如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型)，可以去掉;(分号 )**

```typescript
let person: { name: string
             age: number
             sayHi(): void
             greet(name: string):void
             groot:()=>void
             ={
    name: 'jack',
    age: 19,
    syaHi() {},
    greet(name){},
}
```



 方法的类型也可以使用箭头函数形式(比如：{sayHi: ()=>void})

**对象的属性或方法，也可以是可选的，此时就用到可选属性了**

比如，我们再使用axios({})时，如果发送GET请求，methods属性就可以省略

```typescript
function myAxios(config: {url: string; method?: string}){
    console.log(config)
}

myAxios('www.baidu.com')  //method是可选参数
```



#### 3.8接口

当一个对象类型被多次使用时，一般会使用接口(interface)来描述对象的类型，达到**复用**的目的

解释：

​	①使用interface关键字来声明接口	

​	②接口名称(比如，此处的IPerson)，可以是任意合法的变量名称

​	③声明接口后，直接使用接口名称作为变量的类型

​	④因为每一行都只有一个属性类型，因此，属性类型后面没有;（分号）

```typescript
interface IPerson{
  name: string,
  age: number,
  sayHi(): void,
}


let person: IPerson = {
  name:'jack',
  age:18,
  sayHi(){}
}
```

##### interface(接口)和type(类型别名)的对比:

相同点：都可以给对象指定类型

不同点：

​		①接口，只能为对象指定类型

​		②类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名



##### 接口的继承

如果两个接口之间有相同的属性和方法，可以将公共的属性或方法抽离出来，通过继承来实现复用，比如这个两个接口都有x,y两个属性，重复写两次，可以，但是很繁琐

```typescript
interface Point2D {x: number; y: number}

interface Point3D extends Point2D {z: number}


let poiont3: Point3D = {
  x:2,
  y:5,
  z:5
}
```

解释：

​		①使用extends(继承) 关键字实现了接口Point3D继承Point2D

​		②继承后，Point3D就有了Point2D的所有属性和方法(此时，Point3D同时有x、y、z三个属性)

#### 3.9元组

##### 场景：

在地图中，使用经纬度坐标来标记位置信息

可以使用数组来记录坐标，那么，该数组中只有两个元素，并且这两个元素都是数值类型。

```typescript
let position: number[]=[39.5427,116.2317]
```

使用number[]的缺点：不严谨，因为该类型的数组中可以出现任意多个数字



##### 解决方式（元组）

元组类型是另一种类型的数组，它确切地知道包含多少个元素，以及特定索引对应的类型。

```typescript
let position: [number,number] = [39.5427,116.2317]
```

##### 解释：

​		①元组类型可以确切地标记出有多少个元素，以及每个元素的类型

​		②该示例中，元素有两个元素，每个元素的类型都是number

#### 3.10类型推论

在TS中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型。

换句话说：由于类型推论的存在，这些地方，类型注解可以省略不写！

**发生类型推论的2种常见场景**

①声明变量并初始化时

②决定函数返回值时

**注意：这2种情况，类型注解可以省略不写！**

**推荐：能省略类型注解的地方就省略(不是为了偷懒，是为了充分利用TS类型推论的能力，提高开发效率)**

**技巧：如果不知道类型，可以通过鼠标放在变量名称上，利用VSCode的提示来查看类型**





#### 3.11类型断言

有时候你会比TS更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型

比如

```typescript
<a href="http://www.baidu.com" id="link">百度</a>
const alink = document.getElementById('link')
```

**注意：getElementById方法返回值的类型是HTMLElement，该类型只包含所有标签公共的属性或者方法，不包含a标签特有的href等属性，因此这个类型太宽泛（不具体），无法操作href等a标签特有的属性和方法**

**解决方式：**

这种情况下就需要使用类型断言指定更加具体的类型



##### 使用类型断言：

```typescript
const alink = document.getElementById('link') as HTMLAnchorElement
```

**解释：**

①使用as关键字实现类型断言

②关键字as后面的类型是一个更加具体的类型(HTMLAnchorElement是HTMLElement的子类型)

③通过类型断言，alink的类型变得更加具体，这样就可以访问a标签特有的属性和方法了

**另一种语法：使用<>语法，这种语法形式不常用知道即可**

```typescript
const alink = <HTMLAnchorElement>document.getElementById('link')
```

技巧:在浏览器控制台，通过console.dir()打印DOM元素，在属性列表的最后面，即可看到该元素的类型

#### 3.12字面量类型

思考以下代码,两个变量的类型分别是什么？

```typescript
let str1 = 'Hello TS' 
const str2 = 'Hello TS' 
```

##### 通过TS类型推论机制，可以得到答案

​	①变量str1的类型为：string

​	②常量str2的类型为：'Hello TS'

##### 解释：

​	①str1是一个变量(let)，它的值可以是任意字符串，所以类型为:string

​	②str2是一个常量(const )，它的值不能变化只能是'Hello TS',所以，它的类型为'Hello TS'

##### 注意：

​	此处的'Hello TS'，就是一个字面量类型，也就是说某个特定的字符串也可以作为TS中的类型出现，除字符串外，任意的JS字面量(比如，对象，数字等)都可以作为类型使用

##### 使用模式：

​	字面量类型配合联合类型一起使用

##### 使用场景：

​	用来表示一组明确的可选值列表，比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上下左右中的任意一个

```typescript
function changeDirection(direction:'up'|'down'|'left'|'right'){
  console.log(direction);
}

changeDirection('down')
```

解释：参数direciton的值只能是up/down/left/right中的任意一个

优势：相比于string类型，使用字面量类型更加精确、严谨

#### 3.13枚举

枚举的功能类似于字面量类型+联合类型组合的功能，也可以表示一组明确的可选值。

**枚举：定义一组命名常量。**它描述一个值，该值可以是这些命名常量中的一个。

```typescript
enum Direction{Up,Down,Left,Right}

function changeDirection2(direction: Direction){
  console.log(direction);
}

changeDirection2(Direction.Down)
```

**解释：**

​		①使用enum关键字定义枚举

​		②约定枚举名称，枚举中的值以大写字母开头

​		③枚举中的多个值之间通过,（逗号）分隔

​		④定义号枚举后，直接使用枚举名称作为类型注解

**注意：**

​		形参direciton的类型为枚举Direction，那么，实参的值就应该是枚举Dirction成员的任意一个。

​		访问枚举成员

```typescript
changeDirection2(Direction.Down)
```

**解释：**

​		类似于JS中的对象，直接通过.（点）语法来访问枚举的成员

**问题：**

​		我们把枚举成员作为了函数的实参，它的值是什么呢？

​		可以通过鼠标放到枚举中的成员上，可以看到枚举成员的值

#####  **数字枚举**：

​		枚举成员是有值的，默认为：从0开始自增的数值

​		我们把枚举成员的值为数字的枚举，称为 **数字枚举**

​		当然，也可以给枚举中的成员设初始化值

​		设置初始值后，后面的元素还是会随着前面的值自增长，例如Down为11

```typescript
enum Direction{Up=10,Down,Left,Right}
```





##### 字符串枚举：

枚举成员的值是字符串并且不会自增长，所以每个成员都需要初始值

```typescript
//字符串枚举
enum Direction{
  Up='Up',
  Down='Down',
  Left='Left',
  Right='Right'
}
```

##### 枚举的特点及原理

枚举是TS为数不多的非JavaScript类型级扩展(不仅仅是类型)的特性之一。

因为：其他类型仅仅被当作类型，而枚举不仅仅用作类型，还提供值(枚举成员都是有值的)。

也就是说，其他的类型会在编译为JS代码时自动移除。但是枚举类型会被编译为JS代码！

```typescript
//编译前的枚举ts代码
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

```js
//编译后的枚举js代码
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
```



说明：枚举与前面讲到的字面量+联合类型组合的功能相似，都用来表示一组明确的可选值列表

一般情况下，推荐使用字面量类型+联合类型组合的方式，因为相比枚举，这种方式更加直观，简洁，高效，因为字面量+联合编译成js时，会消失，而枚举不会，所以枚举会造成更大的开销

#### 3.14any类型

**原则：不推荐使用any！**这会让TypeScript编程"AnyScript"(失去TS类型保护的优势)

因为当值的类型为any时，可以对该值进行任意操作，并且不会有代码提示。



解释：以上操作都不会有任何类型错误提示，即使可能存在错误！

尽可能地避免使用any类型，除非临时使用any来”避免“书写很长，很复杂的类型！

##### 其他隐式具有any类型的情况：

​		①声明变量不提供类型也不提供默认值

​		②函数的参数不加类型

##### 注意：

​		因为不推荐使用any，所以，这两种情况下都应该提供类型！

#### 3.15typeof

众所周知，JS中提供了typeof操作符，用来在JS中 获取数据的类型

```js
console.log(typeof "Hello world" //打印string)
```

实际上，TS也提供了typeof操作符：可以在 **类型上下文**中引用变量或者属性的类型（类型查询）。

##### 使用场景：

​		根据已有变量的值，获取该值的类型，来简化类型书写

```typescript
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
```

##### 解释：

​		①使用typeof操作符来获取变量p的类型，结果与第一种(对象字面量形式的类型)相同

​		②typeof出现在类型注解的位置(参数名称的冒号后面)所处的环境就在类型上下文(区别于JS代码)

​		③注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型(比如，函数调用的类型)

## 4.TypeScript高级类型

### 概述

TS中的高级类型有很多，重点学习以下几个高级类型：

①class类

②类型兼容性

③交叉类型

④泛型和keyof

⑤索引签名类型和索引查询类型

⑥映射类型

### 4.1class类

TypeScript全面支持ES2015中引入的class关键字，并为其添加了类型注解和其他语法(比如：可见性修饰符等)。

#### class基本使用，如下：

```typescript
class Person{}
const p = new Person()
```

##### 解释：

​		①根据TS中的类型推论，可以知道Person类的实例对象p的类型是Person

​		②TS中的class，不仅提供了class的语法功能，也作为一种类型存在

#### 实例属性初始化:

```typescript
class Person {
  age: number = 15
  gender = '男'
}
const a = new Person()
a.age
a.gender
```

##### 解释：

​		①声明成员age，类型为number

​		②声明成员gender，并设置初始值，此时，可省略类型注解(TS类型推论为string类型)

#### 构造函数

```typescript
class Person1{
  age: number =0
  gender: string =""

  constructor(age: number,gender: string){
    this.age = age
    this.gender = gender
  }
}

const s = new Person1(18,'男')
console.log(s.age,s.gender);

```

##### 解释：

①成员初始化(比如,age: number)后，才可以通过this.age 来访问实例成员。

②需要为构造函数指定类型注解，否则会被隐式推断为any；构造函数不需要返回值类型



#### 实例方法

```typescript
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
```

##### 解释：

​		方法的类型注解(参数和返回值)与函数用法相同

#### 类的继承

##### 两种方式：

①extends(继承父类)

②implements（实现接口）

**说明：JS中只有extends，而implements是TS提供的**

##### extends

```typescript
class Animal{
  move() {console.log('Moving along');}
}

class Dog extends Animal{
  wolf() {console.log('dogWolf!!!');
  }
}


const dog = new Dog()

dog.move()
```

**解释**：

①通过extends关键字实现继承

②子类Dog继承父类Animal，则Dog的实例对象dog就同时具有了父类Animal和子类Dog的所有属性和方法



继承是两个类之间的关系，实现是类和接口之间的关系

##### implements

```typescript
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
```

类实现接口必须实现接口中的属性和方法，也就是接口对类的约束





#### class类的可见修饰符：

**类成员的可见性：**

可以使用TS来控制class的方法或属性对于class外的代码是否可见

**可见性修饰符包括**：

##### **①public(共有的)**

```typescript
class Animal{
    public move(){
        console.log('Moving along!')
    }
}
```

**解释：**

①在类属性或方法前面添加public关键字，来修饰该属性或方法是共有的

②因为public是默认可见性，所以，可以直接省略



##### **②protected(受保护的)**

表示受保护的，仅对其声明所在类和子类中**(非实例对象)**可见

```typescript
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
```

##### **③private(私有的)**

表示私有的，只有当前类中可见，对实例对象以及子类也是不可见的

```typescript
class Animal3 {
  private move(){
    console.log('Moving along!');
  }
  walk(){
    this.move()  //只能在当前类中使用
    console.log('边叫边跳');
  }
}
const animal3 = new Animal3()
animal3.walk()
```

##### 其他修饰符

除了可见性修饰符之外，还有一个常见修饰符就是:readyonly(只读修饰符)

readonly:表示只读，用来防止在构造函数之外对属性进行赋值

```typescript
class Person3{
  readonly age: number = 17
  //注意：主要是readonly来修饰的属性，必须手动提供明确的类型
  constructor(age: number){
    this.age = age
  }
/*   setAge(){
    this.age = 20  //无法分配到"age",因为它是只读属性
  } */
}

```

解释：

①使用readonly关键字修饰该属性是只读的，注意只能修饰属性不能修饰方法

②注意：属性age后面的类型注解(比如，此处的number)，如果不加，则age的类型为18（字面量类型）

③接口或者{}表示的对象类型，也可以使用readonly

```typescript
interface Iperson{
  readonly name: string
}
let obj: Iperson={
  name:'jack'
}
obj.name='asjj'  //无法分配到"name",因为它是只读属性

let obj2:{readonly name: string}={
  name:'jack'
}
```

### 4.2类型兼容性

两种类型系统：

①Structural Type System(结构化类型系统)

②Nominal Type System(标明类型系统)

##### ①对象之间的类型兼容性

**TS采用的是结构化类型系统**，也叫做duck typing(鸭子类型)，**类型检查关注的是值所具有的形状。**

也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。

```typescript
class P1 { x: number=0; y: number=0}
class P2 { x: number=0; y: number=0}
const pNew: P1 = new P2()
```

解释：

①P1和P2是两个名称不同的类

②变量p的类型被显示标注为P1类型，但是它的值却是P2的实例，并且没有类型错误

③因为TS是结构优化类型系统，只检查P1和P2的结构是否相同(相同，都是x和y两个属性，属性类型也相同)

④但是，如果在Nominal Type System(比如，C#，Java等)，它们是不同的类，类型无法兼容



补充

注意：在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法并不准确。**更准确的说法：对于对象类型来说，y的成员至少与x相同，则x兼容y(成员多的可以赋值给少的)**

 ```typescript
 class P1 { x: number=0; y: number=0}
 class P2 { x: number=0; y: number=0;z: number=0}
 
 const pNew: P1 = new P2()
 //简单说就是成员多的类创建实例可以赋予少的类，但是必须完全覆盖
 ```

解释：

​		①P2的成员至少与P1相同，则P1兼容P2

​		②所以，成员多的P2可以赋值给成员少的P1

##### ②接口之间的类型兼容性

除了class之外，TS中的其他类型也存在相互兼容的情况，**包括:**①接口兼容性②函数兼容性等

接口之间的兼容性，类似于class。并且，class和interface之间也可以兼容

```typescript
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
```

##### ③函数之间的类型兼容性

函数之间兼容性比较复杂，需要考虑：①参数个数②参数类型③返回值类型

**1.参数个数**，参数多的兼容参数少的(或者说，参数少的可以复制给多的)

```typescript
type F1 = (a: number)=> void
type F2 = (a: number, b: number)=> void
//和对象和接口不同，函数是少的赋给多的
let f1: F1=(a=15)=>{}
let f2: F2=f1
```

**解释：**

​		①参数少的可以赋值给参数多的，所以，f1可以赋值给f2

​		②数组forEach方法的第一个参数是回调函数，该示例种的类型为:(value: string,index: number, array: string[])=>void

​		③在JS中省略用不到的函数参数实际上是很常见的，这样的使用方式，促成了TS中函数类型之间的兼容性

​		④并且因为回调函数是有类型的，所以TS会自动推到除参数item、index、array的类型

**2.参数类型**，相同位置的参数类型要相同(原始类型)或兼容(对象类型)

```typescript
type A1 = (a: number)=>string
type A2 = (a: number)=>string

let a1: A1 = ()=>{return ''}
let a2: A2 = a1
```

**解释：**

函数类型F2兼容函数类型F1，因为F1和F2的第一个参数类型相同





```typescript
interface P2D {x: number; y: number}
interface P3D {x: number; y: number}
type H2 = (p: P2D) => void
type H3 = (p: P2D) => void

let h2: H2 =({x=12,y=215})=>{}
let h3: H3 =h2
```



①注意，此处与前面讲到的接口兼容性冲突

②技巧：将对象拆开，把每个属性看作一个个参数，则，参数少的(f2)可以赋值给参数多的(f3)

**3.返回值类型**，只关注返回值类型本身即可：

```typescript
type F5 = ()=>string
type F6 = ()=>string

let f5: F5=()=>{return ''}
let f6: F6 = f5
```

```typescript
type F7 = ()=>{ name: string}
type F8 = ()=>{ name: string; age: number}
let f7: F7
let f8: F8 = ()=>{return {name:'张三',age:16}}
f7= f8
```



**解释**：

①如果返回值类型是原始类型，此时两个类型要相同，比如，F5和F6

②如果返回值类型是对象类型，此时成员多的可以赋值给成员少的，比如F7和F8

### 4.3交叉类型

交叉类型(&)：功能类似于接口继承(extends),**用于组合多个类型为一个类型**(常用于对象类型)

```typescript
interface W1 {
  name: string
  say(): number
}
interface C1{
  phone: string
}
type concat = W1 & C1

let obj: concat ={
  name:'张三',
  phone:'12421412',
  say(){
    return 1
  }
}
```

##### 交叉类型(&)和接口继承(extends)的对比

**相同点:**都可以实现对象类型的组合

**不同点:**两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同

```typescript
interface A{
  fn: (value: number)=>string
}
interface B extends A{
  fn: (value: string)=>string     //错误的写法，接口B错误扩展了接口A
}
```

```typescript
interface A{
  fn: (value: number)=>string
}
interface B {
  fn: (value: string)=>string
}

type Q = A & B

//等价于如下用法，二选一，专业名词叫函数的重载
let q: Q = {
  fn(value: number | string){
    return ''
  }
}
```

### 4.4泛型

泛型是可以在保证类型安全的前提下，让函数等与多种类型一起工作，从而**实现复用**，常用于：**函数、接口、class中**。

**需求**：创建一个id函数，传入什么数据就返回该数据的本身(也就是说，参数和返回值类型相同)

```typescript
function id<Type>(value: Type): Type{ 
    return value}

const num = id<number>(10)
```

泛型在保证类型安全(不丢失类型信息)的同时，可以让函数等与多种不同的类型一起工作，灵活可复用。

实际上，在C#和Java等编程语言中，泛型都是用来实现可复用组件功能的主要工具之一

**解释**：①语法：在函数名称后面添加<>（尖括号）,**尖括号中添加类型变量**，比如此处的Type

​			②**类型变量Type**，是一种特殊类型的变量，它处理类型而不是值

​			③该类型变量相当于一个类型容器，能够捕捉用户提供的类型(具体是什么类型由用户调用该函数时指定)

​			④因为Type是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型

​			⑤类型变量Type，可以是任意合法的变量名称

​			⑥当传入类型number后，这个类型就会被函数声明时，指定的类型变量Type捕获到

​			⑦此时，Type的类型就是number，所以函数id参数和返回值的类型也都是number

同样，如果传入类型string，函数id参数和返回值的类型就都是string。

这样，通过泛型就做到了让id函数与多种不同的类型一起工作，实现了复用的同时保证了类型安全

#### 简化调用泛型函数：

```typescript
function id<Type>(value: Type): Type{ 
    return value}

const num1 = id(10)
const num2 = id('asd')
```

**解释：**①在调用泛型函数时，可以省略**<类型>**来简化泛型函数的调用

​			②此时，TS内部会采用一种叫做类型参数推断的机制，来根据传入的实参自动推断除类型变量Type的类型

​			③比如，传入实参10，TS会自动推断出变量num的类型number，并作为Type的类型

**推荐：** 使用这种简化的方式调用泛型函数，使代码更短，更易于阅读

**说明：**当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数





#### 泛型约束

在默认情况下，泛型函数的类型变量Type可以代表多个类型，这导致无法访问任何属性.

比如,id('a')调用函数时，获取参数的长度:

```typescript
function id <Type>(value: Type): Type{
  console.log(value.length);  //报错，Type上不存在属性和方法，无法获取长度
  return value
}
```

**解释**：Type可以代表任意类型，无法保证一定存在length属性，比如number类型就没有length。此时，就需要为泛型 **添加约束**来收缩类型(缩窄类型取值范围)



添加泛型约束收缩类型，主要由以下两种方式，①指定更加具体的类型 ②添加约束

**1.指定更加具体的类型**

```typescript
function id <Type>(value: Type[]): Type[]{
  console.log(value.length);
  return value
}
```

比如，将类型修改为Type[] (Type类型的数组),因为只要是数组就一定存在lengh属性，因此就可以访问了

**2.添加约束**

```typescript
interface ILength {length: number}

function id <Type extends ILength>(value: Type): Type{
  console.log(value.length);
  return value
}
id(['a','b','c']) //3
id('absddfas')  //8
id({length : 100 , name: 'jack'})  //100
```

**解释**:

​		①创建描述约束的接口ILenght，该接口要求提供length属性

​		②通过extends关键字使用该接口，为泛型(类型变量)添加约束

​		③该约束表示：传入的类型必须具有length属性

**注意**：传入的实参(比如数组)主要由length属性即可，这也符合前面讲到的接口的类型兼容性





#### 多个泛型变量的情况

泛型的类型变量可以有多个，并且类型变量之间还可以约束(比如，第二个类型变量受第一个类型变量约束)

比如：创建一个函数来获取对象中属性的值

```typescript
function getProp<Type, Key extends keyof Type>(obj: Type,key: Key){
  return console.log(obj[key]); //18
}
getProp({name:'jack',age:18},'age') 
```

**解释**：①添加了第二个类型变量Key，两个类型变量之间使用(,)逗号分隔

​			②keyof关键字接收一个对象类型，生成其键名称(可能是字符串或数字)的联合类型

​			③本示例中keyof Type 实际上获取的是传入对象所有键的联合类型，也就是'name|age'

​			④类型变量Key受Type约束，可以理解为：Key只能是Type所有键中的任意一个，或者说只能访问对象中存在的属性

#### 泛型接口

接口也可以配合泛型来使用，以增加其灵活性，增强其复用性

```typescript
interface IdFunc<Type> {
  id: (value: Type)=>Type
  ids: ()=>Type[]
}

let  obj1: IdFunc<number> ={
  id(value) {
      return value
  },
  ids(){
      return [1,2,3,4]
  }
}
```

**解释：**①在接口名称的后面添加<类型变量>,那么，这个接口就变成了泛型接口

​			②接口的类型变量，对接口中的所有其他成员可见，也就是接口中所有成员都可以使用类型变量

​			③使用泛型接口时，需要显式指定具体的类型(比如，此处的IdFun<number>)

​			④此时，id方法的参数和返回值的类型都是number，ids方法的返回值类型是number[]

​			⑤实际上JS中的数组在TS就是一个泛型接口，当我们在使用数组时，TS会根据数组的不同类型，来自动将类型变量设置为相应的类型

​			⑥可以通过ctrl+鼠标左键来查看具体的类型信息

# 2022年10月31日11点42分结束：

快速看了react前面的类型，等学完react后再回来补充剩下的知识点