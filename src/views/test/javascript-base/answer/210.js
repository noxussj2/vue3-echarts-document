var oldArr = ['apple', 'banana', 'strawberry']

var newArr = []

var t1 = setInterval(function () {
    var name = oldArr.shift()
    newArr.push(name)
    console.log('旧箱子水果 ' + oldArr + ', 新箱子水果 ' + newArr)

    if (oldArr.length === 0) clearInterval(t1)
}, 1000)
