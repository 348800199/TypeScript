const count : number = 1;

// 接口
interface Xiaojiejee {
    userName:String,
    age:Number
}

const xiaohong : Xiaojiejee = {
    userName:"小红",
    age:12
}

// 对象类型
const xjj1 :{
    name :String,
    age:Number
} = {
    name:"大红",
    age:222
}

// 数组类型
const xjj2 :String[] = ["x",'xx','xxx'];

// 类 类型
class Person {};
const xjj3:Person = new Person();

// 函数返回类型
function getTotal(one: number, two: number): number {
    return one + two;
  }
const total = getTotal(1, 2);

// 无没返回值
function sayHello(): void {
    console.log("hello world");
  }

// 解构对象
function add({ one, two }: { one: number, two: number }): number {
    return one + two;
  }
  
const three = add({ one: 1, two: 2 });

// 数组多类型
const arr: (number | string)[] = [1, "string", 2];

// 数组json
const xiaoJieJies0: { name: string, age: Number }[] = [
    { name: "刘英", age: 18 },
    { name: "谢大脚", age: 28 },
  ];

// 类型别名(type alias)。
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
    { name: "刘英", age: 18 },
    { name: "谢大脚", age: 28 },
  ];

//  类定义数据结构
class Madam {
    name: string;
    age: number;
  }
  
const xiaoJieJies1: Madam[] = [
    { name: "刘英", age: 18 },
    { name: "谢大脚", age: 28 },
  ];

// 元组
// 固定哪个位置是什么类型
const xiaojiejie: [string, string, number] = ["dajiao", "teacher", 28];

// interface 接口
interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number; // 非必选
  }
  const getResume = (girl: Girl) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
  };
  const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
  };
  getResume(girl);

// 类型别名可以直接给类型，比如string，而接口必须代表对象。

interface Girl1 {
    name: string;
    age: number;
    bust: number;
    waistline?: number; // 非必选
    [propname: string]: any; // 任意值
    say(): string; // 存方法
  }
//  接口的继承
  interface Teacher extends Girl1 {
    teach(): string;
  }

  // 枚举
//   MASSAGE = 1,后面从1开始 默认是从0；
enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}
// 输出
// {
//   '1': 'MASSAGE',
//   '2': 'SPA',
//   '3': 'DABAOJIAN',
//   MASSAGE: 1,
//   SPA: 2,
//   DABAOJIAN: 3
// }

// 通过下标反查
// console.log(Status.MASSAGE, Status[1]);


// 泛型
function join<JSPang>(first: JSPang, second: JSPang) {
  return `${first}${second}`;
}
join < string > ("jspang", ".com");
join < number > (1, 2);

// 数组
function myFun<T>(params:T):T {
  return params;
}
myFun < Array<String> >(["123", "456"]);

// 泛型应用 T[] === Array<T>

class SelectGirl <T> {
  constructor(private girls:Array<T>){}
  getGirl(index:number):T{
    return this.girls[index]
  }
}
const young = new SelectGirl< string >(['大脚','小腰','大长腿']);
console.log(young.getGirl(1));
