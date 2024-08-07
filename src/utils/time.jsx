const timestampConversion = (date) => {
    if(date.constructor == Array) {
        let str = '';
        for(let i=0; i<date.length; i++) {
            str += timeOpe(date[i]) + '到'
        }
        str = str.slice(0, str.length-1)
        return (str)
    } else {
        return(timeOpe(date))
    }
}
const timeOpe = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 注意月份是从0开始的，所以要+1
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // 如果月份、日期、小时、分钟或秒是个位数，前面添加0以保持格式一致
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
export default timestampConversion;