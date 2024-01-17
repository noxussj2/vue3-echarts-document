var person = {
    name: 'libai',
    sayHi: function () {
        return {
            name: 'xiaoming',
            sayHi: function () {
                console.log(this)
            }
        }
    }
}

var fn1 = person.sayHi
var fn2 = fn1().sayHi()
