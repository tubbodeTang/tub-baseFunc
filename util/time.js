/* 
 * 将 Date 类型转换成 YYYY-MM-DD hh:mm:ss
 */
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : `0${n}`
    }
    return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

/* 
 * 将后台返回的各种样子的时间字符串转换成 YYYY-MM-DD hh:mm:ss
 */
const formatDateStr = function (str) {
    let time = new Date(str).toLocaleString('zh', {
        hour12: false
    })
    return time.replace(/\//g, '-')
}

// 从起始时间正计时，距今多少天时分秒
// 输入：给定时间
// 输出：
// 正计时：当前时间距过去给定时间的天、时、分、秒
// 倒计时：当前时间距未来指定的结束时间还剩多少天、时、分、秒

function countStart(timeMil, isPositive) {
    debugger
    const givenTime = new Date(timeMil).getTime()
    this.timer = setInterval(() => {
        const nowTime = new Date().getTime()
        let timeDiff = isPositive ? nowTime - givenTime : givenTime - nowTime
        this.countNumber(timeDiff)
    }, 1000)
}
function countNumber(timeDiff) {
    const dper = 24 * 60 * 60 * 1000;
    const hper = 60 * 60 * 1000;
    const mper = 60 * 1000;
    const sper = 1000;
    let str = ''
    if (timeDiff / dper > 0) {
        str = str + Math.floor((timeDiff / dper)) + "天";
    }
    timeDiff = timeDiff % dper;
    if (timeDiff / hper > 0) {
        str = str + Math.floor((timeDiff / hper)) + "小时";
    }
    timeDiff = timeDiff % hper;
    if (timeDiff / mper > 0) {
        str = str + Math.floor((timeDiff / mper)) + "分钟";
    }
    timeDiff = timeDiff % mper;
    if (timeDiff / sper > 0) {
        str = str + Math.floor((timeDiff / sper)) + "秒";
    }
    this.time = str
}