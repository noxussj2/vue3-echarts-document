/**
 * 通过名称获取水果价格
 */
function getGoodsPrice(name) {
    // 价格表
    var table = {
        apple: 18,
        banana: 5,
        strawberry: 30
    }

    return table[name]
}

var bannaPrice = getGoodsPrice('banana') // 获取香蕉的单价
var applePrice = getGoodsPrice('apple') // 获取苹果的单价

console.log('小明购买了水果，总价是：' + Number(bannaPrice + applePrice) + ' 元') // 小明购买了水果，总价是：23 元
