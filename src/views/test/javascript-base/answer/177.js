/**
 * 获取随机数字验证码
 */
function getRandom(num) {
    var random = Math.random() * Math.pow(10, num);

    return Math.round(random);
}

var res = getRandom(6);

console.log(res); // 920905
