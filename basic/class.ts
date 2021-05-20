class Lady1 {
    content = "Hi，帅哥";
    sayHello() {
      return this.content;
    }
  }
  // 可以使用super关键字，它代表父类中的方法
  class XiaoJieJie extends Lady1 {
    sayLove() {
      return "I love you!";
    }
    sayHello() {
      return super.sayHello() + "。你好！";
    }
  }

  class Person1 {
    name: string;
  }
  
  const person = new Person1();
  person.name = "jspang.com";
  
  // console.log(person.name);

  // private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
  class Person2 {
    private name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}
//-------以下属于类的外部--------
const person2 = new Person2()
person.name = 'jspang.com'    //此处报错
person2.sayHello()
// console.log(Person2.name)  //此处报错


// 简化写法
class Person3{
  constructor(public name:string){
  }
}
// 相当于 
// class Person{
//   public name :string ;
//   constructor(name:string){
//       this.name=name
//   }
// }
const person3= new Person3('jspang')
// console.log(person3.name)

// 在子类中使用构造函数需要用super()调用父类的构造函数
// 就是是父类没有构造函数，子类也要使用super()进行调用

class Person4{
  constructor(public name:string){}
}

class Teacher extends Person4{
  constructor(public age:number){
      super("jspang")
  }
}
const teacher = new Teacher(18)
// console.log(teacher.age)
// console.log(teacher.name)


// setter 与getter 
class Xiaojiejie {
  constructor(private _age:number){}
  get age(){
      return this._age-10
  }
  set age(age:number){
    this._age=age+3
  }
}

const dajiao = new Xiaojiejie(28)
dajiao.age=25
console.log(dajiao.age)

//  static  不用new 直接调用
class Girl{
  static sayLove() {
    return "I Love you";
  }
}
console.log(Girl.sayLove());

// readonly 只读
class Person5 {
  public readonly _name :string;
  constructor(name:string ){
      this._name = name;
  }
}
const person5 = new Person5('jspang')
// person5._name= '谢广坤'// 报错


  