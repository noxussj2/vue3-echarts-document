var obj = {
    name: 'xiaoming',
    children: [
        {
            name: 'libai',
            run: function () {
                return 'i am running'
            }
        }
    ]
}

/**
 * 深拷贝函数
 */
function deep(obj) {
    var children = []

    obj.children.forEach(function (item) {
        children.push({ name: item.name, run: item.run })
    })

    return {
        name: obj.name,
        children: children
    }
}

/**
 * 验证
 */
var obj2 = deep(obj)
obj.children[0].name = 'xiaohong'
console.log(obj2.children[0].name) // libai
