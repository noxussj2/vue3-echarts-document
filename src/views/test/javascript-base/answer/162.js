/**
 * 获取当前时间
 */
function getDateTime() {
    var year = new Date().getFullYear(); // 年
    var month = new Date().getMonth() + 1; // 月
    var date = new Date().getDate(); // 日
    var h = new Date().getHours(); // 时
    var m = new Date().getMinutes(); // 分

    month = month < 10 ? '0' + month : month; // 月份补 0
    date = date < 10 ? '0' + date : date; // 日期补 0
    h = h < 10 ? '0' + h : h; // 小时补 0
    m = m < 10 ? '0' + m : m; // 分钟补 0

    return year + '-' + month + '-' + date + ' ' + h + ':' + m;
}

var dateTime = getDateTime();

console.log(dateTime); // 2023-04-03 10:54
