export const formatDate = (dateString) => {
    // 创建一个新的Date对象（默认使用当前时区）
    const date = new Date(dateString);
    
    // 使用Date对象提供的方法获取年份，注意getMonth()返回的是0-11，所以需要加1
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 使用padStart()补齐2位数的格式
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // 拼接年月日时分秒信息成为最终的字符串格式
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export const timestampConversion = (date) => {
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