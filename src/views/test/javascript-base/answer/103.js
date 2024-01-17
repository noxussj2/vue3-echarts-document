// 基本数据类型验证

var a = 'xiaoming';
var b = a;
b = 'libai';

console.log(a); // xiaoming

// 引用数据类型验证

var obj = {
    name: 'xiaoming',
};

var obj2 = obj;
obj2.name = 'libai';

console.log(obj.name); // libai
