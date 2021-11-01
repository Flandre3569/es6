// call、apply、bind都可以改变this的指向，只不过传参的方式有所不同

function foo(name, age) {
  console.log(this,`姓名是：${name} 年龄是：${age}`);
}

let obj = {
  name: "张三",
  age: 18
}
// 用call改变this指向，使其指向obj
// foo.call(obj,"李四",20);

// 使用apply改变this指向
// foo.apply(obj, ["李四", 20]);

// 使用bind改变this指向
foo.bind(obj)("张三", 20);