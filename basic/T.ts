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
  