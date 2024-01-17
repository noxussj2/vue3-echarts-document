/**
 * 班级类
 */
function MyClass() {
    this.name = []
}

/**
 * 添加学生方法
 */
MyClass.prototype.add = function (name) {
    this.name.push(name)
}

/**
 * 查看当前已有学生
 */
MyClass.prototype.show = function () {
    return this.name
}

/**
 * 实例化班级1
 */
var class1 = new MyClass()
class1.add('xiaoming')
console.log(class1.show()) // [ 'xiaoming' ]

/**
 * 实例化班级2
 */
var class2 = new MyClass()
class2.add('libai')
console.log(class2.show()) // [ 'libai' ]
